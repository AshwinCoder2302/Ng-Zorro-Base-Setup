import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient
  ) {
  }

  post(requestData: any, requestURL: any, isAuthentication: boolean): Observable<any> {
   
      const authToken = localStorage.getItem('Authorization');
      let headers = new HttpHeaders;
      if (authToken) {
        if(isAuthentication) {
          headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': authToken
          });
        } else {
          headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
        }
      }

    return this.http.post<any>(requestURL, requestData, { headers }).pipe(
      catchError((error) => {
        console.error('HTTP error:', error);
        return throwError(() => error); 
      })
    );
  }

  patch(requestData: any, requestURL: any, isAuthentication: boolean): Observable<any> {
   
    const authToken = localStorage.getItem('Authorization');
    let headers = new HttpHeaders;
    if (authToken) {
      if(isAuthentication) {
        headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': authToken
        });
      } else {
        headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
      }
    }

  return this.http.patch<any>(requestURL, requestData, { headers }).pipe(
    catchError((error) => {
      console.error('HTTP error:', error);
      return throwError(() => error); 
    })
  );
}

  get(requestURL: any, isAuthentication: boolean): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    const authToken = localStorage.getItem('Authorization');
    if (authToken) {
      headers = headers.set('Authorization', authToken); 
    }
  
    return this.http.get<any>(requestURL, { headers }).pipe(
      catchError((error) => {
        console.error('HTTP error:', error);
        return throwError(() => error);
      })
    );
  }

  delete(id: any, requestURL: any, isAuthentication: boolean): Observable<any> {
    const fullRequestURL = requestURL + "/" +id;
    const authToken = localStorage.getItem('Authorization');
    let headers = new HttpHeaders;
    if (authToken) {
      if(isAuthentication) {
        headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': authToken
        });
      } else {
        headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
      }
    }
    return this.http.delete<any>(fullRequestURL, { headers }).pipe(
      catchError((error) => {
        console.error('HTTP error:', error);
        return throwError(() => error);
      })
    );
  }
}
