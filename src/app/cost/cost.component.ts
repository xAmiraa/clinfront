import { Component, OnInit } from '@angular/core';
import { Booking } from 'classes/booking';
import { PatientService } from 'services/patient.service';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {
  public bookingModel=
  new Booking (0,'',0,'','',0,'',Date,  Date,'','',0)
  
  constructor( private patient:PatientService) { }

  ngOnInit() {
  }


  // addCost(){
  //   this.patient.addbooking(this.bookingModel.cost).subscribe(response =>{
  //     console.log('data saved',response)
      
  //  })
  // }
}
