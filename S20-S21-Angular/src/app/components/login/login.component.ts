import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private sessionsService: SessionsService,
    private router: Router
  ){ }
    
    // onSubmit(){
    // this.session.login(this.loginForm);
    // sessionStorage.setItem('Token', '123456789');
    // this.router.navigate(['/post'])
    // }
    
  Login() {
    this.sessionsService.login();
    this.router.navigate(['/post']);
  }
  Logout(){
    this.sessionsService.logout()
    this.router.navigate(['/login'])
  }
}
