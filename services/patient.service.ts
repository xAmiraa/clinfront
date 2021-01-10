import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Booking } from 'classes/booking';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  addData(patient):Observable<any>{
    return this.http.post("http://localhost:8080/clinic/patient/addpatient/",patient);
  }
    // get patient data
    getPatientData():Observable<any>{
      return this.http.get("http://localhost:8080/clinic/patient/listpatient/");
    }
    deletepatient(id){
      return this.http.delete<any>("http://localhost:8080/clinic/patient/delete/"+id)
    }
    update_patient(id,drink){
      return this.http.put("http://localhost:8080/clinic/patient/update/"+id,drink)
    }

    patientdetails(_id){
      return this.http.get<any>("http://localhost:8080/clinic/patient/patientdetails/"+_id)
    }

    addbooking(booking):Observable<any>{
      return this.http.post("http://localhost:8080/clinic/booking/addbooking/",booking);
    }
    getbookingData():Observable<any>{
      return this.http.get("http://localhost:8080/clinic/booking/listbooking/");
    }

    search(name):Observable<any>{
      return this.http.get<any>("http://localhost:8080/clinic/patient/search/"+name)
    }
    //delete booking
    deletebooking(id){
      return this.http.delete<any>("http://localhost:8080/clinic/booking/delete/"+id)
    }
  
}
