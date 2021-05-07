import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'https://tapaubackend.herokuapp.com/api/v1/user/read';
  constructor(private http: HttpClient) { }


  getList(): Observable<File[]> {
    return this.http.get<File[]>(this.baseUrl);
   }
   createList(File: Object): Observable<Object> {
    debugger;
    return this.http.post(`${this.baseUrl}`, File);
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
