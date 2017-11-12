import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HospitalsComponent } from './hospitals/hospitals.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AppointmentsComponent,
    DoctorsComponent,
    PageNotFoundComponent,
    HospitalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
