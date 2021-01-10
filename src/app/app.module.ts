import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { EntryComponent } from './entry/entry.component';
import { ReceptionComponent } from './reception/reception.component';
import { PatientComponent } from './patient/patient.component';
import { ReceptionDetailsComponent } from './reception-details/reception-details.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { BookingComponent } from './booking/booking.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PrintPatientAllComponent } from './print-patient-all/print-patient-all.component';
import { PrintPatientComponent } from './print-patient/print-patient.component';
import { CostComponent } from './cost/cost.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewDoctorComponent } from './add-new-doctor/add-new-doctor.component';
import { AddNewAssistantComponent } from './add-new-assistant/add-new-assistant.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorAppointmentComponent,
    AppointmentComponent,
    EntryComponent,
    ReceptionComponent,
    PatientComponent,
    ReceptionDetailsComponent,
    LoginComponent,
    UpdatePatientComponent,
    BookingComponent,
    PatientSearchComponent,
    PrintPatientAllComponent,
    PrintPatientComponent,
    CostComponent,
    DashboardComponent,
    AddNewDoctorComponent,
    AddNewAssistantComponent,
    LoginDoctorComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
