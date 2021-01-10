import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginAssistant } from 'classes/login-assistant';

@Injectable({
  providedIn: 'root'
})
export class AssistantLoginService {

  constructor(private http:HttpClient) { }

  postData(Login: LoginAssistant) {
    console.log(Login)
    return this.http.post('http://localhost:8080/clinic/add-assistant/login',Login,{
      observe :'body',   
      params : new HttpParams().append('Assistanttoken',localStorage.getItem('Assistanttoken'))});
   }
   
   GetAdmin(){
    return this.http.get('http://localhost:8080/clinic/add-assistant/Username',
    {
      observe :'body',   
      params : new HttpParams().append('Assistanttoken',localStorage.getItem('Assistanttoken'))});
  }

  public auth(){
    return !!localStorage.getItem('Assistanttoken')
  }
  getToken(){
    return localStorage.getItem('Assistanttoken')
  }
}
