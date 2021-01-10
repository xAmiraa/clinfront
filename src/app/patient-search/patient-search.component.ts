import { Component, OnInit } from '@angular/core';
import { Patient } from 'classes/patient';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PatientService } from 'services/patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  public name;
  public dogcode;
  public patientModel=new Patient (0,'',0,'','',0,'','');
  constructor(private route:ActivatedRoute , private patient:PatientService , private router:Router) { }
  
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });

     this.patient.search(this.name).subscribe(data=>{
      this.patientModel=data;
      // this.ID=this.code.slice(0,9);
      console.log(this.patientModel);
    })
  }

}
