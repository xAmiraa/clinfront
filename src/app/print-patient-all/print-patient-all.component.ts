import { Component, OnInit } from '@angular/core';
import { PatientService } from 'services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-print-patient-all',
  templateUrl: './print-patient-all.component.html',
  styleUrls: ['./print-patient-all.component.css']
})
export class PrintPatientAllComponent implements OnInit {
  public patientdata=[]
  constructor(private patient:PatientService,private router:Router, private route:ActivatedRoute,) { }

  ngOnInit() {

    
    this.patient.getPatientData().subscribe(data=>{
      this.patientdata=data;
      console.log(data)
  })
  }

}
