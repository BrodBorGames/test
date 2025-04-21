import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserASP } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  baseApiUrl = 'http://localhost:5206/Api/';

  

  getUsers()  {
    console.log(this.http.get<UserASP[]>(`${this.baseApiUrl}Users`))
    return this.http.get<UserASP[]>(`${this.baseApiUrl}Users`);
  }
}
