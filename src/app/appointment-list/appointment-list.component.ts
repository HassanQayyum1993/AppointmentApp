import { AppComponent } from './../app.component';
import { Appointment } from './../models/appointment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})

export class AppointmentListComponent implements OnInit {

  appointmentTitle: string = ''
  appointmentDate: Date = new Date()
  appointmentList: Appointment[] = []

  ngOnInit(){
      let savedAppointments = localStorage.getItem("appointments")
      this.appointmentList = savedAppointments?JSON.parse(savedAppointments):[]
  }

  addAppointment()
  {
    let appointment: Appointment

    if(this.appointmentTitle.trim().length>0 && this.appointmentDate)
    {
      appointment = {
      id: Date.now(),
      title: this.appointmentTitle,
      date: this.appointmentDate
      }
    }

    else 
    {
      return
    }

    this.appointmentList.push(appointment);
    this.appointmentTitle = ''
    this.appointmentDate = new Date()
    localStorage.setItem('appointments', JSON.stringify(this.appointmentList));
  }

  deleteAppointment(index:number)
  {
    this.appointmentList.splice(index,1);
    localStorage.setItem('appointments', JSON.stringify(this.appointmentList));
  }
}
