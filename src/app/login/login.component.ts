import {
    Component,
    OnInit,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from './../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { WindowService } from '../window.service';
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
    encapsulation: ViewEncapsulation.None,
    providers: [AngularFireDatabase, AuthService, WindowService]
})
export class LoginComponent implements OnInit {
    /**
     * FormGroup for handling registration
     */
    registerFormGrp: FormGroup;
    showNav = true;
    loginForm = false;
    otpEnabled = false;
    windowRef: any;
    verificationCode: string;
    user: any;

    /**
     * Contruct login component
     * @param router router
     */
    constructor(
        private router: Router,
        private authService: AuthService,
        public toastr: ToastsManager,
        vcr: ViewContainerRef,
        private win: WindowService
    ) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    /**
     * Init login component
     */
    ngOnInit() {
        this.registerFormGrp = new FormGroup({
            fullName: new FormControl(''),
            email: new FormControl(''),
            mobile: new FormControl(''),
            password: new FormControl(''),
            otp: new FormControl('')
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
        const regVal = this.registerFormGrp.value;
        firebase
            .auth()
            .createUserWithEmailAndPassword(regVal.email, regVal.password)
            .then(user => {
                this.authService.updateUser(
                    user.uid,
                    regVal.fullName,
                    regVal.mobile
                );
            })
            .then(result => {
                this.otpEnabled = true;
                setTimeout(() => {
                    this.windowRef = this.win.windowRef;
                    this.windowRef.recaptchaVerifier = new firebase.auth
                        .RecaptchaVerifier('recaptcha-container');
                    this.windowRef.recaptchaVerifier.render();
                    const appVerifier = this.windowRef.recaptchaVerifier;
                    const num = '+91' + regVal.mobile;
                    firebase
                        .auth()
                        .signInWithPhoneNumber(num, appVerifier)
                        .then(res => {
                            console.log(res);
                            this.windowRef.confirmationResult = res;
                        })
                        .catch(error => console.log(error));
                }, 2000);
            })
            .catch(error => {
                this.toastr.error(error.message, 'Oops!');
            });
    }

    /**
     * Verify user with OTP
     */
    verifyUser() {
        this.windowRef.confirmationResult
            .confirm(this.registerFormGrp.value.otp)
            .then(result => {
                this.user = result.user;
                this.toastr.success(
                    'Registration completed, successfully logged-in',
                    'Success!'
                );
                this.router.navigate(['/schedule']);
            })
            .catch(error => this.toastr.error('Incorrect code', 'Oops!'));
    }
}
