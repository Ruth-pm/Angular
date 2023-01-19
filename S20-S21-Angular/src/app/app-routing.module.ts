import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/post'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  { 
    path: 'post',
    component: PostComponent,
    canActivate: [GuardGuard]
  },
  { 
    path: 'users', 
    component: UsersComponent,
    canActivate: [GuardGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: 
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
