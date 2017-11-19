import { Doctors } from './doctors';
// import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
// import { Http } from '@angular/http';
import {
    AngularFireDatabase,
    AngularFireList,
    AngularFireAction
} from 'angularfire2/database';
import * as firebase from 'firebase';

/**
 * Doctors service or db adapter
 */
@Injectable()
export class DoctorsService {
    /**
     * doctors reference
     */
    doctorsRef: AngularFireList<any>;

    /**
     * Doctors service constructor
     * @param db
     */
    constructor(private db: AngularFireDatabase) {
        /**
         * get doctors db ref
         */
        this.doctorsRef = this.db.list('doctors');
    }

    /**
     * Filter doctors by a location
     * @param place
     */
    filterBy(place: string | null): Observable<any[]> {
        return this.db
            .list('/doctors', ref => ref.orderByChild('place').equalTo(place))
            .snapshotChanges()
            .map(changes => {
                return changes.map(c => ({
                    key: c.payload.key,
                    ...c.payload.val()
                }));
            });
    }

    /**
     * Get doctors list
     */
    getDoctors(): Observable<any[]> {
        return this.doctorsRef.valueChanges();
    }

    /**
     * Get doctors db reference
     */
    getDoctorsRef(): AngularFireList<any> {
        return this.doctorsRef;
    }

    /**
     * Get subscribable doctors list with key
     */
    getKeyedList(): Subscribable<any> {
        return this.getDoctorsRef()
            .snapshotChanges()
            .map(changes => {
                return changes.map(c => ({
                    key: c.payload.key,
                    ...c.payload.val()
                }));
            });
    }

    /**
     * Add new doctors
     * @param name name of the doctors
    * @param place place
    * @param qualification qualification
    * @param hospital hospital where doctor working
    * @param year_of_experience year of experience
     */
    addDoctor(
        name: string,
        place: string,
        qualification: string,
        hospital: string,
        year_of_experience: number
    ) {
        this.getDoctorsRef().push({
            name: name,
            place: place,
            qualification: qualification,
            hospital: hospital,
            year_of_experience: year_of_experience
        });
    }

    /**
     * Update doctor
     * @param key doctor key
     * @param name updated name
     */
    updateHospital(
        key: string,
        name: string,
        place: string,
        qualification: string,
        hospital: string,
        year_of_experience: number
    ) {
        this.getDoctorsRef().update(key, {
            name: name,
            place: place,
            qualification: qualification,
            hospital: hospital,
            year_of_experience: year_of_experience
        });
    }

    /**
     * Delete Doctor
     * @param key Doctor key
     */
    deleteDoctor(key: string) {
        this.getDoctorsRef().remove(key);
    }

    /**
     * Remove all doctors
     */
    deleteAllDoctorss() {
        this.getDoctorsRef().remove();
    }
}
