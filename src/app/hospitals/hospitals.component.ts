import { HospitalsService } from './hospitals.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/**
 * Hospital component
 */
@Component({
    selector: 'app-hospitals',
    templateUrl: './hospitals.component.html',
    styleUrls: ['./hospitals.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AngularFireDatabase, HospitalsService]
})
export class HospitalsComponent implements OnInit {
    /**
     * Filter form control
     */
    public myControl: FormControl = new FormControl('');

    /**
     * Place list for filter
     */
    places = ['Kazhakoottam', 'Kulathur', 'Pattom'];

    /**
    * Hospitals list
    */
    hospitals: Observable<any[]>;

    /**
     * Component constructor
     * @param hospitalsService
     */
    constructor(
        private hospitalsService: HospitalsService,
        private router: Router
    ) { }

    /**
     * Initialize component
     */
    ngOnInit() {
        // this.hospitals = this.hospitalsService.getHospitals();
        this.getHospitalListWithKey();
    }

    /**
     * Filter hospitals by location
     * TODO: Filter the data by passing filter params
     * @param place
     */
    filterByLocation(place) {
        console.log(place);
        this.hospitalsService.filterBy(place).subscribe(result => {
            console.log(result);
        });
    }

    // public filterByLocation(): void {
    //   const value = this.myControl.value;
    // }

    /**
     * Load single hospital details
     * TODO: Load hospital details to new view by calling firebase service (get review and all)
     * @param hospital
     */
    loadHospitalDetails(hospital) {
        console.log(hospital);
        this.router.navigate(['/hospital-details']);
    }

    /**
     * Load single hospital docters list
     */
    getDoctors() {
        this.router.navigate(['/doctors']);
    }

    /**
     * Get hospital list with key
     */
    getHospitalListWithKey() {
        this.hospitalsService.getKeyedList().subscribe(result => {
            this.hospitals = result;
        });
    }
}
