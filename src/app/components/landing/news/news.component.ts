import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	newsList: any;
	isMainPage = false;
	constructor(
		private newsService: NewsService,
		private router: Router
	) {
		if (this.router.url == '/') this.isMainPage = true;
	}

	ngOnInit(): void {
		this.getNewsList();
	}

	getNewsList() {
		this.newsService.getNews().subscribe(response => {
			console.log(response);
			this.newsList = response;
		})
	}

}
