import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { TopBarComponent } from './components/landing/top-bar/top-bar.component';
import { HeaderComponent } from './components/landing/header/header.component';
import { BannerComponent } from './components/landing/banner/banner.component';
import { PlayersComponent } from './components/landing/players/players.component';
import { ScoutsManagersComponent } from './components/landing/scouts-managers/scouts-managers.component';
import { NewsComponent } from './components/landing/news/news.component';
import { AboutUsComponent } from './components/landing/about-us/about-us.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { CountsComponent } from './components/landing/counts/counts.component';
import { ProfileDetailsComponent } from './components/landing/details/profile-details/profile-details.component';
import { NewsDetailsComponent } from './components/landing/details/news-details/news-details.component';
import { ContactsComponent } from './components/landing/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		TopBarComponent,
		HeaderComponent,
		BannerComponent,
		PlayersComponent,
		ScoutsManagersComponent,
		NewsComponent,
		AboutUsComponent,
		FooterComponent,
		CountsComponent,
		ProfileDetailsComponent,
		NewsDetailsComponent,
		ContactsComponent,
  LoginComponent,
  RegisterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
