import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HospitalsComponent {
  // todo: load from service, paginated lazy loading, filters, rating header, images, map navigation link
  hospitals = [
    {
      id: 1,
      name: 'AJ Hospitals',
      place: 'Kazhakoottam',
      landmark: 'Main Road',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 2,
      name: 'CSI Mission Hospital',
      place: 'Kazhakoottam',
      landmark: 'V-kay Supermarket, Vadakkumbhagam',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 3,
      name: 'TSC Hospital',
      place: 'Kulathur',
      landmark: 'Bypass Road',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 1,
      name: 'AJ Hospitals',
      place: 'Kazhakoottam',
      landmark: 'Main Road',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 2,
      name: 'CSI Mission Hospital',
      place: 'Kazhakoottam',
      landmark: 'V-kay Supermarket, Vadakkumbhagam',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 3,
      name: 'TSC Hospital',
      place: 'Kulathur',
      landmark: 'Bypass Road',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 1,
      name: 'AJ Hospitals',
      place: 'Kazhakoottam',
      landmark: 'Main Road',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 2,
      name: 'CSI Mission Hospital',
      place: 'Kazhakoottam',
      landmark: 'V-kay Supermarket, Vadakkumbhagam',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 3,
      name: 'TSC Hospital',
      place: 'Kulathur',
      landmark: 'Bypass Road',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 1,
      name: 'AJ Hospitals',
      place: 'Kazhakoottam',
      landmark: 'Main Road',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 2,
      name: 'CSI Mission Hospital',
      place: 'Kazhakoottam',
      landmark: 'V-kay Supermarket, Vadakkumbhagam',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    },
    {
      id: 3,
      name: 'TSC Hospital',
      place: 'Kulathur',
      landmark: 'Bypass Road',
      district: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      postalCode: '695583'
    }
  ];

  myControl: FormControl = new FormControl();
  places = ['Kazhakoottam', 'Kulathur', 'Chaacka'];
}
