import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpEventType} from '@angular/common/http';
import { Router } from '@angular/router';



import {API} from '../_config/strings';

@Injectable(
  //{providedIn: 'root'}
)
export class NetworkHelperService {

  private apiUrl: any;
  

  constructor(
      private http: HttpClient, private router: Router
  ) { 
    this.apiUrl = API;
    
    
  }

  login(usuario: string, password: string) {
    const body = new FormData();
    body.append('username', usuario);
    body.append('password', password);

    return this.http.post('http://25.86.12.90:8000/api/login_check', body, {observe: 'response'});
}// login



}
