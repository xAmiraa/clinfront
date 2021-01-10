import { Component, OnInit } from '@angular/core';
import { RegisterDoctor } from 'classes/register-doctor';
import { Router } from '@angular/router';
import { DoctorGeneralService } from 'services/doctor-general.service';
import { DoctorLoginService } from 'services/doctor-login.service';
import { NgForm } from '@angular/forms';
import { LoginDoctor } from 'classes/login-doctor';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {
  Login : LoginDoctor;
  Result: boolean=false;
  Result2: boolean=false;
  Div: string;
  Div2: string;
  constructor(private router:Router , private Gen:DoctorGeneralService,private adminserv:DoctorLoginService) { }

  ngOnInit() {
    this.resetForm()
    if (this.Gen.Registerd)
    {
      // console.log("asd")
      this.Result2 = true
    this.Div2= "Registerd Successfully, Login to Continue"
    }
    if (this.Gen.authorized)
    {
      console.log(this.Gen.authorized)
      // console.log("asd")
      this.Result2 = false;
      this.Result = true
    this.Div= "Please Login To view this Page"
    console.log(this.Div)
    }
  }
  onSubmit (form :NgForm)
  {
    this.insert(form);
  }
  insert (form :NgForm)
  {
    if (form.invalid)
   { 
     this.Result= true; 
    this.Div = "Complete All Data"
    console.log(this.Div)
   }
   else
   { 
    this.adminserv.postData(this.Login).subscribe(
      res=>
      {
        this.Result2 = false;
        this.Result = true;
         console.log(res)
        this.resetForm(form);
        localStorage.setItem('Assistanttoken',res as string)
        this.router.navigate(['/doctor'])
        
    },
    error=>
    {
      this.Result= true; 
  
      this.Div=error.error.Msg
      
    }
    );
  }
  }
  resetForm( form? : NgForm)
  {
    if (form!=null)
    form.resetForm();
    this.Login = 
    {
    email : "",
    password :null,
   
    }
 
  }
  
}
