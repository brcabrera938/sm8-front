import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {NetworkHelperService} from '../../_services/network-helper.service';
import {FORMS, API, CODFUNC, PAGE, GENERALES} from '../../_config/strings';

import {Usuario} from '../../_model/Usuario';
import {Subject} from 'rxjs';
//Ruta anterior modificada
//import {Subject} from 'rxjs/Subject';

import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() esLaUrl = new EventEmitter();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  public usuario: Usuario = new Usuario();
  interval;

  constructor(
    private network: NetworkHelperService,
    private rutas: Router,
  ) { 
    this.interval = setInterval(() => {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      if (!this.usuario) {
        // console.log('perfil false');
        this.getUser();
    } else {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }}, 300);
  }

  ngOnInit(): void {
    
  }

  ir(url) {
    this.rutas.navigate(['dashboard', url]);
  }

  getUser() {

    if (localStorage.getItem('usuario')) {
        this.usuario = JSON.parse( localStorage.getItem('usuario') );
    }
  }
  

  ngOnDestroy() {
    
  }

  logOut() {
  this.ngOnDestroy();
  this.network.logOut();
  }

}
