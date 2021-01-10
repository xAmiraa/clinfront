import { Component, OnInit } from '@angular/core';
import { PatientService } from 'services/patient.service';
import { Patient } from 'classes/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception-details',
  templateUrl: './reception-details.component.html',
  styleUrls: ['./reception-details.component.css']
})
export class ReceptionDetailsComponent implements OnInit {
  public patientModel=new Patient (0,'',0,'','',0,'','');
  constructor(private patientservice:PatientService,private router:Router) { }
searchText;
  ngOnInit() {
  }
  onSubmit(){

    this.patientservice.addData(this.patientModel).subscribe(response =>{
     console.log('data saved',response)
     
  })

  }
  search(name){
    this.router.navigate(['/reception/reception-details/patientsearch',name])
   console.log(name);
   
  }
}
