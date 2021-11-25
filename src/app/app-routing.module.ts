import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { Login2Component } from './auth/login2/login2.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes=[
  { path: '',
   component: PagesComponent,
   children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login2', component: Login2Component},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
   ]
  },

  { path: 'login', component: LoginComponent},
  { path: 'register', component:RegisterComponent },
  { path: '**', component: NopagefoundComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
