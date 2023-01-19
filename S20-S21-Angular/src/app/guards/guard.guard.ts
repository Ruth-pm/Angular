import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionsService } from '../services/sessions.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(
    private sessionsService: SessionsService, 
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.sessionsService.getIsLogin()) {
        return true;
    }
   
    this.router.navigate(['login']);
    return false;
  }
  
}
