import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginDoctor } from 'classes/login-doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorLoginService {

  constructor(private http:HttpClient) { }
  postData(Login: LoginDoctor) {
    console.log(Login)
    return this.http.post('http://localhost:8080/clinic/add-doctor/login',Login,{
      observe :'body',   
      params : new HttpParams().append('Doctortoken',localStorage.getItem('Doctortoken'))});
   }
   
   GetAdmin(){
    return this.http.get('http://localhost:8080/clinic/add-doctor/Username',{
      observe :'body',   
      params : new HttpParams().append('Doctortoken',localStorage.getItem('Doctortoken'))});
  }

  public auth(){
    return !!localStorage.getItem('Doctortoken')
  }
  getToken(){
    return localStorage.getI
}}
