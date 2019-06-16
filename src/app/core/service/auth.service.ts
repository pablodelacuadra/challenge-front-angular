import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../login/login.component';
import { TokenResponse } from '../model/token-response';
import { Router } from '@angular/router';
import { Register } from 'src/app/registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  isAuthenticated() {
    return !!window.localStorage.getItem('token')
  }

  login(loginBody: Login): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('http://127.0.0.1:8000/api/auth/login/', loginBody);
  } 

  register(RegisterBody: Register): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('http://127.0.0.1:8000/api/auth/users/', RegisterBody);
  } 

  logout(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/logout/');
  }
}
