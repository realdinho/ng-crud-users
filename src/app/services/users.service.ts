import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const baseUrl = 'https://reqres.in/api/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}?page=2`);
  }

  get(id): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  create(data): Observable<User> {
    return this.http.post<User>(baseUrl, data);
  }

  update(id, data): Observable<User> {
    return this.http.put<User>(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<User> {
    return this.http.delete<User>(`${baseUrl}/${id}`);
  }
}
