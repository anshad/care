// import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs/Observable';
// import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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
        return this.db
            .object('hospitals')
            .snapshotChanges()
            .map(action => {
                const data = action.payload.toJSON();
                return data;
            });
    }
}
