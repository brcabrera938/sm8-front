import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpEventType} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Login2Component } from './auth/login2/login2.component';
// Servicios
import {NetworkHelperService } from './_services/network-helper.service';
import { PagesComponent } from './pages/pages.component';
import { FormsModule } from '@angular/forms';
import { ListarClientesComponent } from './_components/cobranza/listar-clientes/listar-clientes.component';
import { VerClienteComponent } from './_components/cobranza/ver-cliente/ver-cliente.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    Login2Component,
    PagesComponent,
    ListarClientesComponent,
    VerClienteComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule,
    AppRoutingModule,  //Agregamos este que es el modulo nuevo
    FormsModule,   //Se agrega para que funcione ngSubmit
  ],
  providers: [
    NetworkHelperService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
