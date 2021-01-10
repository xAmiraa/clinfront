import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { ReceptionComponent } from './reception/reception.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { ReceptionDetailsComponent } from './reception-details/reception-details.component';
import { PatientComponent } from './patient/patient.component';
import { LoginComponent } from './login/login.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { BookingComponent } from './booking/booking.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PrintPatientAllComponent } from './print-patient-all/print-patient-all.component';
import { PrintPatientComponent } from './print-patient/print-patient.component';
import { CostComponent } from './cost/cost.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewDoctorComponent } from './add-new-doctor/add-new-doctor.component';
import { AddNewAssistantComponent } from './add-new-assistant/add-new-assistant.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';


const routes: Routes = [
  {path:"",component:HomeComponent, pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'add-doctor',component:AddNewDoctorComponent},
    {path:'add-assistant',component:AddNewAssistantComponent}
  ]},
 {path:"login",component:LoginComponent},
 {path:'print-all',component:PrintPatientAllComponent},
 {path:'print-patient/:id',component:PrintPatientComponent},
  {path:'entry',component:EntryComponent},
  {path:'reception',component:ReceptionComponent,
  children:[
    {path:"booking/:id",component:BookingComponent},
    {path:"edit-patient/:id",component:UpdatePatientComponent},
    {path:"appointment",component:AppointmentComponent,children:[
      {path:'cost',component:CostComponent}
    ]},
    
    {path:'doctor-appointment',component:DoctorAppointmentComponent},
    {path:'reception-details',component:ReceptionDetailsComponent,
    children:[
      {path:'patientsearch/:name',component:PatientSearchComponent},
      {path:'patient',component:PatientComponent}
    ]},
  ]},
  {path:'doctor',component:DoctorComponent},
  {path:'login-doctor',component:LoginDoctorComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
