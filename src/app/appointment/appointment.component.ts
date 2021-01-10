import { Component, OnInit } from '@angular/core';
import { PatientService } from 'services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'classes/booking';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private patient:PatientService,private router:Router, private route:ActivatedRoute,) { }
  public patientdata=[]
  bookingCost= new Booking (0,'',0,'','',0,'',Date,  Date,'','',0)
  ngOnInit() {

    this.patient.getbookingData().subscribe(data=>{
      this.patientdata=data;
      data.time=Date
      console.log(data)
  })
  }


  delete(patient){
    this.patient.deletebooking(patient._id).subscribe(data=>{
        console.log(data)
     
      })
         
 }
  route_cost(){
    this.router.navigate(['/reception/appointment/cost'])
  }


}
