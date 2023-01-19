import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  isLogin: boolean = false;

  constructor(private router: Router) {}

  login() {
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false;
  }

  getIsLogin(): boolean {
    return this.isLogin;
  }
}
