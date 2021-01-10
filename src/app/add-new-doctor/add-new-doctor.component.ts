import { Component, OnInit } from '@angular/core';
import { RegisterDoctor } from 'classes/register-doctor';
import { DoctorAuthService } from 'services/doctor-auth.service';
import { Router } from '@angular/router';
import { DoctorGeneralService } from 'services/doctor-general.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-doctor',
  templateUrl: './add-new-doctor.component.html',
  styleUrls: ['./add-new-doctor.component.css']
})
export class AddNewDoctorComponent implements OnInit {
  RegisterDoctor : RegisterDoctor
  Result: string;
  Result1: number=1;
  Result2: number=1;
  Div: string;
  Div1: string;
  constructor(private RegServ : DoctorAuthService , private router:Router , private Gen:DoctorGeneralService) { }

  ngOnInit() {
    this.resetForm()
  }
  onSubmit (form :NgForm)
  {
    this.insert(form);
  }
  insert (form :NgForm)
  {
    if (form.invalid)
   { 
     this.Result1= 0; 
    this.Div1 = "Complete All Data"
   }
   else
   { 
     this.RegServ.postData(this.RegisterDoctor).subscribe(res=>
      {
       console.log(res)
        this.resetForm(form);
        
          this.Gen.Registerd=true
        this.router.navigate(['/doctor'])
        
      
    }
    ,error => {
      console.log(error)
      this.Result1 = 0;
      this.Div = error.error.Msg as string;
      
    });
  }
   
  }
  resetForm( form? : NgForm)
  {
    if (form!=null)
    form.resetForm();
    this.RegisterDoctor = 
    {
    name : "",
    nationalID:null,

    email : "",
    phone:null,
    specialization:'',
    city:"",
    address:'',

    password :"",
    password2: ""

    }
  }

  specialization(value){

  }
}
