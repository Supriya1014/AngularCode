import { Component, OnInit } from '@angular/core';
import { EventBookingService } from '../event-booking.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  message: string;
  array: string[];
  seatsAvailability: boolean;
  disabled: boolean;
  constructor(private service: EventBookingService,
    private formBuilder: FormBuilder) { }
  seats: any = [1, 2, 3, 4, 5, 6];
  seatNo: any;
  ngOnInit() {
    this.seatsAvailability = true;
    this.disabled = false;
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      seats: ['', [Validators.required]],
      attendees: ['', [Validators.required]],
    });
    this.service.currentMessage.subscribe(message => this.message = message)
    this.array = this.message.split("?");
    console.log(+this.array[1]);
    if (this.array[1] == '0') { this.disabled = true; }
  }
  seatAvailability() {
    this.seatNo = this.registerForm.value.seats;
    if (+(this.array[1]) < this.registerForm.value.seats) {
      this.seatsAvailability = false
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    alert('Ticket Booked!!')
    console.log(JSON.stringify(this.registerForm.value));
    this.disabled = true;
  }
}


