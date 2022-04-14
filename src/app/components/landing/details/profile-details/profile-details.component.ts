import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
	selector: 'app-profile-details',
	templateUrl: './profile-details.component.html',
	styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
	playerInfo: any;
	safeURL: any;
	isMainPage = false;
	constructor(
		private route: ActivatedRoute,
		private playerService: PlayersService,
		private _sanitizer: DomSanitizer,
		private router: Router
	) {
		if (this.router.url == '/') this.isMainPage = true;
	}

	ngOnInit(): void {
		let playerId = this.route.snapshot.paramMap.get('id');
		this.getPlayerById(playerId);
	}
	getPlayerById(playerId: string | null) {
		this.playerService.getPlayerById(playerId).subscribe(response => {
			console.log(response);
			this.playerInfo = response;
			this.playerInfo?.videos?.forEach((element: any) => {
				console.log(element)
				this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(element);
			});
		})
	}

}
