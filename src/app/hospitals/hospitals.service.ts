// import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class HospitalsService {
    constructor(private db: AngularFireDatabase) {
        // db
        //     .list('hospitals')
        //     .snapshotChanges(['child_added'])
        //     .subscribe(actions => {
        //         actions.forEach(action => {
        //             console.log(action.type);
        //             console.log(action.key);
        //             console.log(action.payload.val());
        //         });
        //     });
    }

    getHospitals(): Observable<any[]> {
        return this.db.list('hospitals').valueChanges();
    }
}
