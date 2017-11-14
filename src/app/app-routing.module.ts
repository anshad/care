import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'appointments', component: AppointmentsComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'hospitals', component: HospitalsComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'hospital-details', component: HospitalDetailsComponent },
    { path: 'booking-confirmation', component: BookingConfirmComponent },
    { path: '', redirectTo: '/hospitals', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
