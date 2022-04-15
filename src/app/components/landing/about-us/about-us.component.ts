import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
	isMainPage = false;
	constructor(
		private router: Router
	) {
		if (this.router.url == '/main') this.isMainPage = true;
	}

	ngOnInit(): void {
	}

}
