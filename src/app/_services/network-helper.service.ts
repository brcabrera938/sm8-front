import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpEventType} from '@angular/common/http';
import { Router } from '@angular/router';

import {Observable} from 'rxjs';



import {API} from '../_config/strings';

@Injectable(
  //{providedIn: 'root'}
)
export class NetworkHelperService {

  private apiUrl: any;
  private rutaUrl: any;
  private peticionString: any;
  private token: string;


  constructor(
      private http: HttpClient, private router: Router
  ) { 
    this.apiUrl = API;
    
    
  }

  login(usuario: string, password: string) {
    const body = new FormData();
    body.append('username', usuario);
    body.append('password', password);

    return this.http.post(this.apiUrl.url + this.apiUrl.login, body, {observe: 'response'});
}// login

//Se crea para iniciar a usar en listar clientes
callSecureService(serviceUrl: string, method: string, jsonData: object | null): Observable<any> {

  const cabeceras = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
  };
  if ( method == 'GET') {

      return this.http.get(this.apiUrl.url + serviceUrl, cabeceras);
  } else if (method == 'POST') {

      return this.http.post(this.apiUrl.url + serviceUrl,
          jsonData, {
              headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
              reportProgress: true,
          }
      );
  }

}// secureservice




}
