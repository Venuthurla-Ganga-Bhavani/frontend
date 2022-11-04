import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient ) { }

  getUsers():Observable<Details[]>{
    return this.http.get<Details[]>(this.url);
  }
}



