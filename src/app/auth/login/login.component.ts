import { Component, OnInit } from '@angular/core';
import { NetworkHelperService } from 'src/app/_services/network-helper.service';
import { FORMS, PAGE, API } from '../../_config/strings';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  public title = '';
  public usuario = '';
  public password = '';
  FORMS: any;
  PAGE: any;
  API: any;
  loginLoader = false;


  constructor( 
     private networkService:NetworkHelperService,
    ) {

      this.title = FORMS.login.title;
      this.FORMS = FORMS;
      this.PAGE = PAGE;
      this.API = API;

     }

  ngOnInit(){
  }

  login(){
    this.loginLoader = true;
    this.networkService.login(this.usuario, this.password).subscribe( (response: any) => {
      console.log(response);
        localStorage.setItem('user_token', response.body.token);
        // this.router.navigate(['dashboard']);
        // Para evitar caché, se redirecciona a la misma página
        location.href = '/dashboard';
        }, err => {
        this.loginLoader = false;
        //Swal('Error', 'Usuario o Contraseña Incorrectos', 'error');
        }
    );
}

entrar() {
  console.log('Estoy entrando');
}


}
