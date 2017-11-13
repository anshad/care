import { DoctorsService } from './doctors.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [DoctorsService]
})
export class DoctorsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
