import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
	isMainPage = false;
	constructor(
		private router: Router
	) {
		if (this.router.url == '/') this.isMainPage = true;
	}

	ngOnInit(): void {
	}

}
