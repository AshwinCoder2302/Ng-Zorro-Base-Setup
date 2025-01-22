import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestEndpoints } from './rest-endpoints';
import { LoginResponse } from '../models/login.response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private restEndpoints: RestEndpoints) { }

  getProducts(): Observable<any> {
    return this.http.get(this.restEndpoints.GET_PRODUCT);
  }

}
