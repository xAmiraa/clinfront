import { Component, OnInit } from '@angular/core';
import { Patient } from 'classes/patient';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { PatientService } from 'services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
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
  onSubmit(){
    console.log("heree")
      this.patient.update_patient(this.code,this.patientModel).subscribe(data=>{
        
       console.log(data)
        
        })
        console.log(this.patientModel);
       this.router.navigate(["/reception/reception-details/patient"])
    }
}
