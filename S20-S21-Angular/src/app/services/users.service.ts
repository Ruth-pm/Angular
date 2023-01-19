import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURI: string = "https://jsonplaceholder.typicode.com/users"

  constructor(
    private http: HttpClient,
  ) { }

  getAllUser(){
    return this.http.get<User[]>(this.apiURI)
  } 
  getUser(id: string){
    return this.http.get<User>(`${this.apiURI}/${id}`)
  }
}
