import { Component, OnInit } from '@angular/core';
import { RegisterAssistant } from 'classes/register-assistant';
import { AssistantAuthService } from 'services/assistant-auth.service';
import { Router } from '@angular/router';
import { AssistantGeneralService } from 'services/assistant-general.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-assistant',
  templateUrl: './add-new-assistant.component.html',
  styleUrls: ['./add-new-assistant.component.css']
})
export class AddNewAssistantComponent implements OnInit {

  Registerassistant : RegisterAssistant
  Result: string;
  Result1: number=1;
  Result2: number=1;
  Div: string;
  Div1: string;
  constructor(private RegServ : AssistantAuthService , private router:Router , private Gen:AssistantGeneralService) { }

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
     this.RegServ.postData(this.Registerassistant).subscribe(res=>
      {
       console.log(res)
        this.resetForm(form);
        
          this.Gen.Registerd=true
        this.router.navigate(['/reception/reception-details'])
        
      
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
    this.Registerassistant = 
    {
    name : "",
    nationalID:0,

    email : "",
    phone:0,
    specialization:'',
    city:"",
    address:'',

    password :"",
    password2: ""

    }
  }
}
