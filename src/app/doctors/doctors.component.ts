import { DoctorsService } from './doctors.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Doctor component
 */
@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AngularFireDatabase, DoctorsService]
})
export class DoctorsComponent implements OnInit {
    /**
    * Filter form control
    */
    public myControl: FormControl = new FormControl('');

    /**
    * Hospitals list
    */
    doctors: Observable<any[]>;

    /**
     * Component constructor
     * @param doctorsService
     */
    constructor(
        private doctorsService: DoctorsService,
    ) { }

    /**
     * Initialize component
     */
    ngOnInit() {
        this.getDoctorsListWithKey();
    }

    /**
     * Get hospital list with key
     */
    getDoctorsListWithKey() {
        this.doctorsService.getKeyedList().subscribe(result => {
            this.doctors = result;
            console.log(this.doctors);
        });
    }
}
