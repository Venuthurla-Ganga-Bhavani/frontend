import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { Details } from './details';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url:string="http://localhost:8080/api/v1/getcustomer";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  

  constructor(private httpClient: HttpClient ) { }

  getUsers():Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.url);
  }

  createCustomer(details : Details):Observable<Object>{
    return this.httpClient.post((this.url),details);
  }

  onDeleteCustomer(id: number): Observable<Object>{
    return this.httpClient.delete('${this.url}/${id}');
  }
  
  getCustomerById(id: number):Observable<Details>{
    return this.httpClient.get<Details>('${this.url}/${id}');
  }
  
  updateCustomer(id: number,details: Details): Observable<Object>{
    return this.httpClient.put('${this.url}/${id}',details);
  }
}




