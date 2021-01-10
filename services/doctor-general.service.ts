import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorGeneralService {
  UserId : number
  UserType : string
  ModalError :string 
  Registerd : boolean= false
  authorized : boolean= false
  constructor(private http:HttpClient) { }
  SetError(Error : string)
  {
     this.ModalError = Error;
  }
  GetError()
  {
     return this.ModalError ;
  }
  GetUser ()
  {
   return this.http.get('http://localhost:8080/clinic/add-doctor/Username',{
   observe :'body',   
   params : new HttpParams().append('Doctortoken',localStorage.getItem('Doctortoken'))});
  }
}
