import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://comp3133-assignment1-4a55f5b77abd.herokuapp.com/graphql', data);
  }
  viewEmployee(id: any): Observable<any> {
    return this._http.get(`https://comp3133-assignment1-4a55f5b77abd.herokuapp.com/graphql/${id}`);
  }
  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://comp3133-assignment1-4a55f5b77abd.herokuapp.com/graphql/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://comp3133-assignment1-4a55f5b77abd.herokuapp.com/graphql');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://comp3133-assignment1-4a55f5b77abd.herokuapp.com/graphql/${id}`);
  }
}
