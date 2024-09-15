import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestEndpoints } from './rest-endpoints';
import { LoginResponse } from '../models/login.response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private restEndpoints: RestEndpoints) { }


  login(loginRequest: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.restEndpoints.AUTHENTICATION, loginRequest);
  }

}
