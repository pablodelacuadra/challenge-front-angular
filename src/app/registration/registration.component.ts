import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

export class Register{
  name:string;
  last_names:string;
  username:string;
  password:string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const registerBody: Register = {
      name: this.registerForm.controls.name.value,
      last_names: this.registerForm.controls.lastname.value,
      username: this.registerForm.controls.username.value,
      password: this.registerForm.controls.password.value
    }
    this.authService.register(registerBody).subscribe(
      data => {
        this.router.navigate(['login']);
      },
      error => {
        console.error(error);
      }
    );
  }
  ngOnInit() {
    window.localStorage.removeItem('token');
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
}
