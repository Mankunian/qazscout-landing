import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AboutUsComponent } from './components/landing/about-us/about-us.component';
import { ContactsComponent } from './components/landing/contacts/contacts.component';
import { ProfileDetailsComponent } from './components/landing/details/profile-details/profile-details.component';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './components/landing/main/main.component';
import { NewsComponent } from './components/landing/news/news.component';
import { PlayersComponent } from './components/landing/players/players.component';
import { ScoutsManagersComponent } from './components/landing/scouts-managers/scouts-managers.component';

const routes: Routes = [
	{
		path: 'main', component: LandingComponent, children: [
			{ path: '', component: MainComponent },
			{ path: 'players', component: PlayersComponent },
			{ path: 'scouts', component: ScoutsManagersComponent },
			{ path: 'news', component: NewsComponent },
			{ path: 'about', component: AboutUsComponent },
			{ path: 'contacts', component: ContactsComponent },
			{ path: 'player/:id', component: ProfileDetailsComponent },
		]
	},
	{ path: '', redirectTo: "/main", pathMatch: "full" },
	{ path: 'auth/login', component: LoginComponent },
	{ path: 'auth/register', component: RegisterComponent }
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
