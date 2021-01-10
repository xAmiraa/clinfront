import { Component, OnInit } from '@angular/core';
import { PatientService } from 'services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
public patientdata=[]
  constructor(private patient:PatientService,private router:Router, private route:ActivatedRoute,) { }

  ngOnInit() {


    this.patient.getPatientData().subscribe(data=>{
      this.patientdata=data;
      console.log(data)
  })
   
  }


  onSelect(patient){

    this.router.navigate(['/reception/edit-patient',patient._id])
   
   
  }

  print_patient(patient){

    this.router.navigate(['/print-patient',patient._id])
   
   
  }
  booking(patient){
    this.router.navigate(['/reception/booking',patient._id])
  }
  delete(patient){
   this.patient.deletepatient(patient._id).subscribe(data=>{
       console.log('deleted')
    
     })
         this.router.navigate(["/reception/reception-details/patient"])
}
}