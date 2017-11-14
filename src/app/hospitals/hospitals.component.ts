import { HospitalsService } from './hospitals.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

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
    places = ['Kazhakoottam', 'Kulathur', 'Chaacka'];

    /**
    * Hospitals list
    */
    hospitals: Observable<any[]>;

    /**
     * Hospital list with key
     */
    hospitalList: Array<any> = [];

    /**
     * Component constructor
     * @param hospitalsService
     */
    constructor(private hospitalsService: HospitalsService) {}

    /**
     * Initialize component
     */
    ngOnInit() {
        // this.hospitals = this.hospitalsService.getHospitals();
        this.getHospitalListWithKey();
    }

    /**
     * Filter hospitals by location
     * @param place
     */
    filterByLocation(place) {
        console.log(place);
    }

    // public filterByLocation(): void {
    //   const value = this.myControl.value;
    // }

    /**
     * Load single hospital details
     * @param hospital
     */
    loadHospitalDetails(hospital) {
        console.log(hospital);
    }

    /**
     * Get hospital list with key
     */
    getHospitalListWithKey() {
        this.hospitalsService.getKeyedList().subscribe(result => {
            Object.keys(result).map(key => {
                this.hospitalList.push({ key: key, data: result[key] });
            });
        });
    }
}
