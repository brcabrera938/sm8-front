import { Component, OnInit } from '@angular/core';

//import { Router } from '@angular/router';
import { NetworkHelperService } from 'src/app/_services/network-helper.service';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  public title = '';
  public usuario = '';
  public password = '';
  FORMS: any;
  PAGE: any;
  API: any;
  loginLoader = false;

  constructor(
    //private router: Router,
   // private networkService: NetworkHelperService,
  ) { }

  ngOnInit(){
  }

}
