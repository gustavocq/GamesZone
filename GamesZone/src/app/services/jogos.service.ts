import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})

export class JogosService {

  base_url = `${environment.baseUrl}`;
  userId = localStorage.getItem("userId");
  headers = new HttpHeaders({ 'authorization': `Bearer ${localStorage.getItem("token")}` });

  constructor(
    private http: HttpClient
  ) { 

  }

  getAllJogos(): Observable<any> {
    const headers = this.headers
    return this.http
      .get<any>(`${this.base_url}v1/GamesByDate/2022-11-06/get_all`, { headers }).pipe(take(1));
  }
}
