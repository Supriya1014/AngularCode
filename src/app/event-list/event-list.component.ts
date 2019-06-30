import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventData } from './event';
import { EventBookingService } from '../event-booking.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  data: any;
  results: Observable<EventData[]>;
  img: any;
  filter: any;
  message: any;
  constructor(private http: HttpClient, private service: EventBookingService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.message = message)
    this.getEventList();
    this.results = this.service.eventList;
  }
  newMessage(val: number) {
    const name = this.data[val].name;
    const date = this.data[val].seatsAvailable;
    this.service.changeMessage(name, date)
  }

  getEventList() {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.data = data;
      console.log(this.data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets\\eventList.json');
  }
}


