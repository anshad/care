import { PatientsService } from './patients.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [PatientsService]
})
export class PatientsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
