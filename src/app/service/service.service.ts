import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerCus } from '../model/customercus'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'https://tapaubackend.herokuapp.com/api/v1/user/read';
  constructor(private http: HttpClient) { }


  getList(): Observable<CustomerCus[]> {
    return this.http.get<CustomerCus[]>(this.baseUrl);
   }
   createList(CustomerCus: Object): Observable<Object> {
    debugger;
    return this.http.post(`${this.baseUrl}`, CustomerCus);
  }
  deleteList(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  updateList(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
   //updatedetails
   getupdateList(id: number): Observable<any> {
   return this.http.get(`${this.baseUrl}/${id}`);


}

}
