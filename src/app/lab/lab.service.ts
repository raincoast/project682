import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { EMPTY, Observable, of } from 'rxjs';
import { Lab } from '../interfaces/lab';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(private http: HttpClient, private auth: AuthService) { }
  getLabInfo(id: number) {
    return this.http.get(`http://127.0.0.1:10010/lab/info/${id}`);
  }
  getLabList(): Observable<any> {
    return this.http.get("http://127.0.0.1:10010/lab/list");
  }
}
