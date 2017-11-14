import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IMyDrpOptions } from 'mydaterangepicker';
import { FormControl } from '@angular/forms';
@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScheduleComponent implements OnInit {
    public date: FormControl = new FormControl('');
    constructor() {}

    ngOnInit() {}
}
