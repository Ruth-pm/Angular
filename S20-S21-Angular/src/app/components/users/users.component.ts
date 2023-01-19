import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{  
  users: User[] = [];

  constructor(
    private usersService : UsersService
  ){ }

  ngOnInit(): void {
    
  }
  mostrarUser(){
    this.usersService.getAllUser()
    .subscribe((data) =>
    this.users = data)
  }
}
