import { environment } from '../environments/environment.prod';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
firebase.initializeApp(environment.firebase);
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    _router;
    constructor(private router: Router) {
        this._router = router;
    }
}
