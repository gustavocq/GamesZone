import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})

export class PlayerService {

  base_url = `${environment.baseUrl}`;
  userId = localStorage.getItem("userId");
  headers = new HttpHeaders({ 'authorization': `Bearer ${localStorage.getItem("token")}` });

  constructor(
    private http: HttpClient
  ) { 

  }

  getAllPlayers(): Observable<any> {
    const headers = this.headers
    return this.http
      .get<any>(`${this.base_url}v1/player/get_all`, { headers }).pipe(take(1));
  }
}
