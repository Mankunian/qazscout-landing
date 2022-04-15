import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	hide: boolean = true;
	constructor(
		private router: Router,
		private tokenStorageService: TokenStorageService,
		private authService: AuthService
	) { }

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			"userEmail": new FormControl("", [Validators.required]),
			"password": new FormControl("", Validators.required)
		})
	}

	logIn() {
		let userData = this.loginForm.value;
		this.authService.login().subscribe(response => {
			console.log(response);
			const user = response.find((a: any) => {
				return a.email === userData.userEmail && a.password === userData.password
			})

			this.tokenStorageService.saveUser(user);
			if (user) {
				this.loginForm.reset();
				this.router.navigate(['/main/my-profile']);
			} else {
				alert("Пользователь не существует")
			}
		})
	}


	register() {
		this.router.navigate(['/auth/register']);
	}

}
