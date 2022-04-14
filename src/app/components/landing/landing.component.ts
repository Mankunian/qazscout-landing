import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	goToLogin() {
		window.open('http://localhost:4200/auth/login');
	}

}
