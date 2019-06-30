import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { BookEventComponent } from './book-event/book-event.component';
import { Routes } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
//import {FormsModule} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { SearchPipe } from './event-list/search.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    BookEventComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClient,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
