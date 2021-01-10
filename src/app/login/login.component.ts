import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAssistant } from 'classes/login-assistant';
import { AssistantGeneralService } from 'services/assistant-general.service';
import { AssistantLoginService } from 'services/assistant-login.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login : LoginAssistant;
  Result: boolean=false;
  Result2: boolean=false;
  Div: string;
  Div2: string;
  constructor(private router:Router , private Gen:AssistantGeneralService,private adminserv:AssistantLoginService) { }

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
        this.router.navigate(['/reception/reception-details'])
        
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
