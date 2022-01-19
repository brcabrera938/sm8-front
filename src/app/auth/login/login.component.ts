import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
     private roter: Router,
     private networkService: NetworkHelperService,
    ) {

      this.title = FORMS.login.title;
      this.FORMS = FORMS;
      this.PAGE = PAGE;
      this.API = API;

     }

  ngOnInit(){
    this.networkService.logOut();
  }

  login(){
    this.loginLoader = true;
 //Se cambio la estructura de la suscripcion para que subscribe no marcara error   
    this.networkService.login(this.usuario, this.password).subscribe( 
      {
      next: (response: any) => {console.log(response);
        localStorage.setItem('user_token', response.body.token);  
        // this.router.navigate(['dashboard']);
        // Para evitar caché, se redirecciona a la misma página
        location.href = '/dashboard';
      }, 
       error: ()=> this.loginLoader = false,
        //Swal('Error', 'Usuario o Contraseña Incorrectos', 'error');
      }
    );
}



}
