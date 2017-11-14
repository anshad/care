import { HospitalsService } from './hospitals.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-hospitals',
    templateUrl: './hospitals.component.html',
    styleUrls: ['./hospitals.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AngularFireDatabase, HospitalsService]
})
export class HospitalsComponent implements OnInit {
    public myControl: FormControl = new FormControl('');
    places = ['Kazhakoottam', 'Kulathur', 'Chaacka'];
    hospitals: Observable<any[]>;

    constructor(private hospitalsService: HospitalsService) {}

    filterByLocation(place) {
        console.log(place);
        // todo: service call
    }

    // public someFn(): void {
    //   const value = this.myControl.value;
    //   console.log('value');
    // }

    ngOnInit() {
        this.hospitals = this.hospitalsService.getHospitals();
    }
    // todo: load from service, paginated lazy loading, filters, rating header, images, map navigation link
    // hospitals = [
    //     {
    //         id: 1,
    //         name: 'AJ Hospitals',
    //         place: 'Kazhakoottam',
    //         landmark: 'Main Road',
    //         district: 'Thiruvananthapuram',
    //         state: 'Kerala',
    //         country: 'India',
    //         postalCode: '695583'
    //     }
    // ];
}
