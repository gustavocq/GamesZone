import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, take } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable(
  {
    providedIn: "root",
  }
)

export class SessionService {
  base_url = `${environment.baseUrl}`;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };
    return this.http
      .post(`${this.base_url}v1/loginUser`, body, {}).pipe(take(1));
  }

  createUser(user: any) {
    return this.http
      .post<any>(`${this.base_url}v1/createUser`, user).pipe(take(1));
  }

  refreshToken(refresh_token: string) {
    const rt = { refresh_token }
    return this.http
      .post<any>(`${this.base_url}v1/refreshToken`, rt);
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  resetPassword(emailToReset: string) {
    const _email = { email: emailToReset }
    return this.http
      .post<any>(`${this.base_url}v1/resetPassword`, _email).pipe(take(1));
  }
}

