import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
	selector: 'app-players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
	players: any;
	isMainPage = false;

	constructor(
		private playersService: PlayersService,
		private router: Router
	) {
		console.log(router.url)
		if (router.url == '/main') this.isMainPage = true;
	}

	ngOnInit(): void {
		this.getPlayers();
	}
	getPlayers() {
		this.playersService.getPlayers().subscribe(response => {
			console.log(response);
			this.players = response;
			let totalPlayersCount = response.length;
			sessionStorage.setItem('totalPlayersCount', totalPlayersCount);
		})
	}

}
