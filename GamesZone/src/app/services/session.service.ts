import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, take } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable (
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
    
      async anonimo() {
        // const token = await this.storage.getStringLocal('token');
        const headers = new HttpHeaders({ 'api_key': environment.api_key });
        return this.http
          .post(`${this.base_url}v1/signInAnonymously`, {}, { headers }).pipe(take(1));
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
    
      isAuthenticated() {
        const token = localStorage.getItem("token");
        const refreshToken = localStorage.getItem("refreshToken");
        return token && refreshToken;
      }
    
      resetPassword(emailToReset: string) {
        const _email = {email: emailToReset}
        return this.http
            .post<any>(`${this.base_url}v1/resetPassword`, _email).pipe(take(1));
      }
}

