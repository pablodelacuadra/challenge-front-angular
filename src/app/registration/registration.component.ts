import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

export class Register {
  name:string;
  last_names:string;
  username:string;
  password:string;
  permission:any;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerObject:Register;
  permissions:any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  onSubmit() {
    this.authService.register(this.registerObject).subscribe(
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
    this.registerObject = new Register(); 
    this.getPermissions();
  }
  getPermissions(){
    this.authService.permissions().subscribe(
      data =>{
        this.permissions = data;
      }
    )
  }
}
