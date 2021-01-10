import { Injectable } from '@angular/core';
import { DoctorGeneralService } from './doctor-general.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegisterDoctor } from 'classes/register-doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthService {

  constructor(private generalSer:DoctorGeneralService,private router:Router,private http:HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {  
    if (localStorage.getItem('Doctortoken') !==  null)
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
postData(Register:RegisterDoctor){
  return this.http.post('http://localhost:8080/clinic/add-doctor/register-doctor',Register)
 }
}
