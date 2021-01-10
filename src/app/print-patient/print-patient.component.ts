import { Component, OnInit } from '@angular/core';
import { PatientService } from 'services/patient.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Patient } from 'classes/patient';

@Component({
  selector: 'app-print-patient',
  templateUrl: './print-patient.component.html',
  styleUrls: ['./print-patient.component.css']
})
export class PrintPatientComponent implements OnInit {
  public patientModel=new Patient (0,'',0,'','',0,'','');
  constructor(private route:ActivatedRoute,private patient:PatientService,private router:Router) { }
  public code;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');

      this.patient.patientdetails(this.code).subscribe(data=>{
        this.patientModel=data;
        console.log(data)
      
     });
  })

  }

}
