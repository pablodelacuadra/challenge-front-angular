import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

export class Login{
  username:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  invalidLogin: boolean;
  showNav: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.invalidLogin = false;
    if (this.loginForm.invalid) {
      return;
    }
    const loginBody: Login = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.authService.login(loginBody).subscribe(
      data => {
        this.invalidLogin = false;
        window.localStorage.setItem('token', data.token);
        this.router.navigate(['ticket-list']);
      },
      error => {
        console.error(error);
        this.invalidLogin = true;
      }
    );
  }
  ngOnInit() {
    window.localStorage.removeItem('token');
    this.showNav = false;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
}


