import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}
	showNav = true;
	loginForm = true;
	otpEnabled = false;

	login() {
		this.router.navigate(['/hospitals']);
	}

	createOtp() {
		this.otpEnabled = true;
	}

	createUser() {
		this.loginForm = true;
	}


}
