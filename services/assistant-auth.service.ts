import { Injectable } from '@angular/core';
import { AssistantGeneralService } from './assistant-general.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterAssistant } from 'classes/register-assistant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssistantAuthService {

  constructor(private generalSer:AssistantGeneralService,private router:Router,private http:HttpClient) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {  
    if (localStorage.getItem('Assistanttoken') !==  null)
     return true 
     else
     {
           console.log("asd")
           this.generalSer.authorized = true;
           console.log(this.generalSer.authorized)
           this.router.navigate([''])
           return false;
     }

   
}
// register
postData(Register:RegisterAssistant){
  return this.http.post('http://localhost:8080/clinic/add-assistant/register-assistant',Register)
 }
}
