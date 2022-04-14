import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/landing/about-us/about-us.component';
import { ContactsComponent } from './components/landing/contacts/contacts.component';
import { ProfileDetailsComponent } from './components/landing/details/profile-details/profile-details.component';
import { LandingComponent } from './components/landing/landing.component';
import { NewsComponent } from './components/landing/news/news.component';
import { PlayersComponent } from './components/landing/players/players.component';
import { ScoutsManagersComponent } from './components/landing/scouts-managers/scouts-managers.component';

const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'players', component: PlayersComponent },
	{ path: 'scouts', component: ScoutsManagersComponent },
	{ path: 'news', component: NewsComponent },
	{ path: 'about', component: AboutUsComponent },
	{ path: 'contacts', component: ContactsComponent },
	{ path: 'player/:id', component: ProfileDetailsComponent },
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
