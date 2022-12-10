import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})

export class UserService {

  base_url = `${environment.baseUrl}`;
  userId = localStorage.getItem("userId");
  headers = new HttpHeaders({ 'authorization': `Bearer ${localStorage.getItem("token")}` });

  constructor(
    private http: HttpClient
  ) { 

  }

  getCurrentUser(): Observable<any> {
    const headers = this.headers
    return this.http
      .get<any>(`${this.base_url}v1/user/${this.userId}`, { headers }).pipe(take(1));
  }

  getUserById(id: string): Observable<any> {
    const headers = this.headers
    return this.http
      .get<any>(`${this.base_url}v1/user/${id}`, { headers }).pipe(take(1));
  }

  updateUser(user: any): Observable<any> {
    const headers = this.headers
    return this.http
      .put<any>(`${this.base_url}v1/user/${this.userId}`, user, { headers }).pipe(take(1));
  }

  deleteUser(): Observable<any> {
    const headers = this.headers
    return this.http
      .delete<any>(`${this.base_url}v1/user/${this.userId}`, { headers }).pipe(take(1));
  }
}
