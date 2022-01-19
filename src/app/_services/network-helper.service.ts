import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpEventType} from '@angular/common/http';
import { Router } from '@angular/router';

import {Observable} from 'rxjs';


import {API, PETICION} from '../_config/strings';

import { Usuario } from '../_model/Usuario';

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
    this.rutaUrl = 'http://app.sct.gob.mx/';
    this.peticionString = PETICION;
    this.cargarSesion();
    
  }
  cargarSesion() {
    if ( localStorage.getItem('user_token') ) {
        this.token = localStorage.getItem('user_token');
    } else {
        this.token = '';
    }
}

guardarSesion(usuario: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario) );
}


  login(usuario: string, password: string) {
    const body = new FormData();
    body.append('username', usuario);
    body.append('password', password);

    return this.http.post(this.apiUrl.url + this.apiUrl.login, body, {observe: 'response'});
}// login


logOut() {
  localStorage.removeItem('user_token');
  localStorage.removeItem('usuario');
  this.router.navigate(['/login']);
}

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
