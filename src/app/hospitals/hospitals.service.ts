import { Hospital } from './hospital';
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
 * Hospital service or db adapter
 */
@Injectable()
export class HospitalsService {
    /**
     * hospital reference
     */
    hospitalsRef: AngularFireList<any>;

    /**
     * Hospital service constructor
     * @param db
     */
    constructor(private db: AngularFireDatabase) {
        /**
         * get hospital db ref
         */
        this.hospitalsRef = this.db.list('hospitals');
    }

    /**
     * Filter hospital by a location
     * @param place
     */
    filterBy(place: string | null): Observable<any[]> {
        return this.db
            .list('/hospitals', ref => ref.orderByChild('place').equalTo(place))
            .snapshotChanges()
            .map(changes => {
                return changes.map(c => ({
                    key: c.payload.key,
                    ...c.payload.val()
                }));
            });
    }

    /**
     * Get hospital list
     */
    getHospitals(): Observable<any[]> {
        return this.hospitalsRef.valueChanges();
    }

    /**
     * Get hospital db reference
     */
    getHospitalRef(): AngularFireList<any> {
        return this.hospitalsRef;
    }

    /**
     * Get subscribable hospital list with key
     */
    getKeyedList(): Subscribable<any> {
        return this.getHospitalRef()
            .snapshotChanges()
            .map(changes => {
                return changes.map(c => ({
                    key: c.payload.key,
                    ...c.payload.val()
                }));
            });
    }

    /**
     * Add new hospital
     * @param name name of the hospital
     * @param location location
     * @param landmark landmarh
     * @param district district
     * @param state state
     * @param postalCode postal code
     */
    addHospital(
        name: string,
        place: string,
        landmark: string,
        district: string,
        state: string,
        postalCode: string
    ) {
        this.getHospitalRef().push({
            name: name,
            place: place,
            landmark: landmark,
            district: district,
            state: state,
            postalCode: postalCode
        });
    }

    /**
     * Update hospital
     * @param key hospital key
     * @param name updated name
     */
    updateHospital(
        key: string,
        name: string,
        place: string,
        landmark: string,
        district: string,
        state: string,
        postalCode: string
    ) {
        this.getHospitalRef().update(key, {
            name: name,
            place: place,
            landmark: landmark,
            district: district,
            state: state,
            postalCode: postalCode
        });
    }

    /**
     * Delete hospital
     * @param key hospital key
     */
    deleteHospital(key: string) {
        this.getHospitalRef().remove(key);
    }

    /**
     * Remove all hospitals
     */
    deleteAllHospitals() {
        this.getHospitalRef().remove();
    }
}
