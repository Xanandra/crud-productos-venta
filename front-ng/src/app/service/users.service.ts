import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = "http://localhost:3000/login";

  constructor(private _http:HttpClient) { }

  login(userData:User): Observable<any> {
    console.log(userData)
    return this._http.post<any>(this.URL, userData);
  }
}
