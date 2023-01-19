import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/sessions.service';
Router
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    public sessionsService: SessionsService, 
    private router: Router
  ) { }

  logout() {
    this.sessionsService.logout();
    this.router.navigate(['/login']);
  }
}
