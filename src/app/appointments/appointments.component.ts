import { AppointmentsService } from './appointments.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AppointmentsService]
})
export class AppointmentsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
