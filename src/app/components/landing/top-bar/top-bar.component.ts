import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
	isCurrentUser: any;
	constructor(
		private router: Router,
		private tokenStorage: TokenStorageService
	) { }

	ngOnInit(): void {
		this.checkCurrentUser()
	}

	checkCurrentUser() {
		this.isCurrentUser = this.tokenStorage.getUser();
	}

}
