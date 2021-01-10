import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PatientService } from 'services/patient.service';
import { Patient } from 'classes/patient';
import { Booking } from 'classes/booking';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 public mydate=Date.now()
  public patientModel=new Patient (0,'',0,'','',0,'','');
  public bookingModel=
  new Booking (0,'',0,'','',0,'',Date,  Date,'','',0)
  constructor(private route:ActivatedRoute,private patient:PatientService,private router:Router) { }
  public code;
  ngOnInit() {


    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');

      this.patient.patientdetails(this.code).subscribe(data=>{
        this.bookingModel=data;
        console.log(data)
      
     });
  })
  }

  onSubmit(){

    this.patient.addbooking(this.bookingModel).subscribe(response =>{
     console.log('data saved',response)
     
  })
this.router.navigate(["/reception/reception-details/patient"])
  }



}
