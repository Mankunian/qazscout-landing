import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoutsManagersService } from 'src/app/services/scouts-managers.service';

@Component({
	selector: 'app-scouts-managers',
	templateUrl: './scouts-managers.component.html',
	styleUrls: ['./scouts-managers.component.scss']
})
export class ScoutsManagersComponent implements OnInit {
	managers: any;
	isMainPage = false;
	constructor(
		private scoutManagersService: ScoutsManagersService,
		private router: Router
	) {
		if (this.router.url == '/') this.isMainPage = true;
	}

	ngOnInit(): void {
		this.getManagers();
	}
	getManagers() {
		this.scoutManagersService.getManagers().subscribe(response => {
			console.log(response);
			this.managers = response;
			let totalManagersCount = response.length;
			sessionStorage.setItem('totalManagersCount', totalManagersCount);
		})
	}

}
