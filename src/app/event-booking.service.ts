import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

export interface EventData{
name: string,
      eventDate: string,
      seatsAvailable : number,
      img :string,
}

export interface data{
  name:string,
  date: string,
}

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {

 private messageSource = new BehaviorSubject('');
 currentMessage = this.messageSource.asObservable();

  eventList: Observable<EventData[]>
  private $eventList: BehaviorSubject<EventData[]>;
  private baseUrl: string;
  private dataStore: {
    eventData: EventData[]
  };

  constructor(private http: HttpClient) {
    
    this.dataStore = { eventData: [] };
    this.$eventList = <BehaviorSubject<EventData[]>>new BehaviorSubject([]);
    this.eventList = this.$eventList.asObservable();
   }
   changeMessage(name: string, date: string) {
    this.messageSource.next(name +"?"+ date);
  }

}
