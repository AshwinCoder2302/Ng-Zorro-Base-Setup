import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestEndpoints } from './rest-endpoints';
import { LoginResponse } from '../models/login.response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private restEndpoints: RestEndpoints) { }

  getCategories(): Observable<any> {
    return this.http.get(this.restEndpoints.GET_CATEGORY);
  }

}
