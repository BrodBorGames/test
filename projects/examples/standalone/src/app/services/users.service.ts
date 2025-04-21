import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserASP } from '../data/services/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:5206/api/Users';
  private http = inject(HttpClient);
  

  listUser(): Observable<UserASP[]> {
    console.log("Сработал вызов функции в Users")
    console.log(this.http.get<UserASP[]>(this.apiUrl))
    return this.http.get<UserASP[]>(this.apiUrl);
  }
  constructor() { }
}
