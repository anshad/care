import { AppointmentsService } from './appointments.service';
import { IMyDrpOptions } from 'mydaterangepicker';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AppointmentsService]
})
export class AppointmentsComponent implements OnInit {
    myDateRangePickerOptions: IMyDrpOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy'
    };

    // For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
    // to set initial date range value using the selDateRange attribute.
    model: any = {
        beginDate: { year: 2018, month: 10, day: 9 },
        endDate: { year: 2018, month: 10, day: 19 }
    };
    constructor() {}

    ngOnInit() {}
}
