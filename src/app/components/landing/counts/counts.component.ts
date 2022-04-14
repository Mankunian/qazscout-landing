import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-counts',
	templateUrl: './counts.component.html',
	styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {
	totalPlayersCount: any;
	totalManagersCount: any;

	constructor() { }

	ngOnInit(): void {
		this.totalPlayersCount = sessionStorage.getItem('totalPlayersCount');
		this.totalManagersCount = sessionStorage.getItem('totalManagersCount');
	}

}
