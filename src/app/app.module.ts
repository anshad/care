import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import {
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
    declarations: [
        AppComponent,
        PatientsComponent,
        AppointmentsComponent,
        DoctorsComponent,
        PageNotFoundComponent,
        HospitalsComponent,
        LoginComponent,
        ScheduleComponent,
        HospitalDetailsComponent,
        BookingConfirmComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        MatToolbarModule,
        MatInputModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        MatMomentDateModule,
        MyDateRangePickerModule,
        MatSnackBarModule,
        ToastModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
