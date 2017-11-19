import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    showNav = true;
    loginForm = true;
    otpEnabled = false;

    constructor(private router: Router) {}

    ngOnInit() {}

    login() {
        this.router.navigate(['/hospitals']);
    }

    createOtp() {
        this.otpEnabled = true;
    }

    createUser() {
        this.loginForm = true;
    }
    registerUser() {}
}
