import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

/**
 * Login component
 */
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    /**
     * FormGroup for handling registration
     */
    registerFormGrp: FormGroup;
    showNav = true;
    loginForm = true;
    otpEnabled = false;

    /**
     * Contruct login component
     * @param router router
     */
    constructor(private router: Router) {}

    /**
     * Init login component
     */
    ngOnInit() {
        this.registerFormGrp = new FormGroup({
            fullName: new FormControl(''),
            email: new FormControl(''),
            mobile: new FormControl(''),
            password: new FormControl('')
        });
    }

    login() {
        this.router.navigate(['/hospitals']);
    }

    createOtp() {
        this.otpEnabled = true;
    }

    /**
     * Navigate to sign-in form
     */
    navigateToSignIn() {
        this.loginForm = true;
    }

    /**
     * Resiter user to the system
     */
    registerUser() {
        console.log(this.registerFormGrp);
    }
}
