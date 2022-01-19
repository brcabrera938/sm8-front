import { Component, OnInit } from '@angular/core';
import {NetworkHelperService} from '../../_services/network-helper.service';
import {GENERALES, API, CODFUNC, PAGE} from '../../_config/strings';

import { Usuario } from '../../_model/Usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  API: any;
  GENERALES: any;
  CODFUNC: any;
  PAGE: any;

  elementosMenu = [];
  arrayMenuDesplegable = [];

  boolMenuDesplegable = false;

  public usuario: Usuario = new Usuario();

  constructor(
    private network: NetworkHelperService,
    private router: Router
  ) { 
    this.PAGE = PAGE;
    this.API = API;
    this.GENERALES = GENERALES;
    this.CODFUNC = CODFUNC;
    this.getMenu();
  }

  ngOnInit(): void {

  }
  

  irA(elemento) {
    if (elemento !== 'dashboard') {
        this.router.navigate(['/dashboard', elemento]);
    } else {
        this.router.navigate(['dashboard']);
    }
  }

  getMenu() {
    
    //Prueba para armar desde 0 la funcion

    // this.network.callSecureService(
    // this.API.user.usuarioMenu,
    // 'GET', null)
    // .subscribe({  
    //   next: (response: any) => {
    //     this.network.guardarSesion(this.usuario);
    //   },
    //   error: (err)=> {
    //     console.log(err);
    //         if (err.error.code === 401) {
    //             console.log('entro en id de codigo');
    //             location.href = '/login';
    //         }
    //   },
    //   }
    // );


    //console.log(this.usuario);
    this.network.callSecureService(
      this.API.user.usuarioMenu,
      'GET', null)
      .subscribe(
        {
          next: (response: any) => {
            if (response.code) {
              console.log('entro en id de codigo');
              location.href = '/login';
            }
            console.log( response );
            this.usuario.userName = response.Mensaje.usuario.userName;
            this.usuario.userId = response.Mensaje.usuario.userId;
            this.usuario.nombre = response.Mensaje.usuario.nombre;
            this.usuario.apellido = response.Mensaje.usuario.apellido;
            this.usuario.rol = response.Mensaje.usuario.rol;
            this.usuario.sucNombre = response.Mensaje.usuario.sucNombre;
            this.usuario.sucId = response.Mensaje.usuario.sucId;
            this.usuario.sucTelefono = response.Mensaje.usuario.sucTelefono;
            this.usuario.imagenPerfil = this.API.imagenesPerfil + response.Mensaje.usuario.imagen;
            this.usuario.permisos = response.Mensaje.menu;
            this.usuario.email = response.Mensaje.usuario.email;
            this.usuario.grupoNombre = response.Mensaje.usuario.grupoNombre;
            this.usuario.celular = response.Mensaje.usuario.celular;
            this.network.guardarSesion(this.usuario);
            this.elementosMenu.push({
              nombre: 'Menu Principal',
              url: 'dashboard',
              icon: 'mdi-view-dashboard'
            });
            for (const responseElementoMenu of response.Mensaje.menu) {
              const  cod = this.CODFUNC.find(
                  opcionMenu => opcionMenu.codFunc === responseElementoMenu.codigoFuncionalidad
              );
              if (cod) {
                  this.elementosMenu.push({
                      nombre: cod.nombre,
                      url: cod.url,
                      icon: cod.icon
                  });
              }
              // p
              const subMenu = this.elementosMenu.find( desplegable => desplegable.url === 'materialAlmacen' );
              // console.log( subMenu );
              // p
              if ( subMenu ) {
                  this.boolMenuDesplegable = true;
                  // console.log( 'Tengo permiso' );
              }
          }
          // console.log( this.arrayMenuDesplegable );
          // console.log( this.elementosMenu[9].url );
          },
          error: (err)=> { console.log(err);
            if (err.error.code === 401) {
                console.log('entro en id de codigo');
                location.href = '/login';
            }},
        }
      );

      /*
      //Sintaxix anterior de la peticion
      (response: any) => 
      {
       //codigo de respuesta bien   
      },   
      err => {
       // Codigo de error
      }*/


  }//GetMenu

  
}
