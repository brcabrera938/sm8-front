import { Component, OnInit } from '@angular/core';

import { NetworkHelperService } from 'src/app/_services/network-helper.service';
import {FORMS, API, CODFUNC, PAGE, GENERALES} from '../../../_config/strings';
import { Router } from '@angular/router';


// import Swal from 'sweetalert2';
 import {Usuario} from '../../../_model/Usuario';
 import {Subject} from 'rxjs';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtTrigger2: Subject<any> = new Subject();
  dtTrigger3: Subject<any> = new Subject();

  // audio;
  FORMS: any;
  API: any;
  CODFUNC: any;
  PAGE: any;
  GENERALES: any;
  tipoDeCliente = '';

  // Permisos en botón
  botonesPermisos = {
    crearClie: false,
};
// Fin Permisos en botón

 public usuario: Usuario = new Usuario();

rol: string = '';
nombreUsuario: string = '';

clientesArray = [];
clientesArrayReverse = [];
arrayListadoDeClientes = [];
arrayListadoDeContratosBXFolio = [];
arrayContratosRangoFolio = [];

permisosArray = [];

arraySucursales = ['Vallejo', 'Aguascalientes', 'Guadalajara', 'Puerto Vallarta', 
        'La paz', 'Queretaro', 'Cancun', 'Los cabos', 'Tijuana', 'Coatzacoalcos',
        'Mazatlan', 'Tlaquepaque', 'Cuernavaca', 'Monterrey', 'Toluca', 'Puebla',
        'Chiapas', 'Merida'];

    sucursal: string = '';
    rangoInicio: number = 0;
    rangoFin: number = 0;
    
    buscarFolio: Number = 0;

    // cita;

    boolListadoClientes = false;
    btnListadoClientesConContrato = false;

  constructor(
    // private chat: ChatService,
    private network: NetworkHelperService,
    private router: Router,
  ) { 
    this.FORMS = FORMS;
    this.API = API;
    this.CODFUNC = CODFUNC;
    this.GENERALES = GENERALES;
    this.PAGE = PAGE;
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    // this.rol = this.usuario.rol;
    // this.nombreUsuario = this.usuario.userName;

  }

  ngOnInit(){

    this.getPermisos();
   this.getClientes();
   this.inverse();

    //prueba para ver si guarda el usuario con el que se logea
    //console.log(this.usuario);

  }

  getClientes(){
    this.network.callSecureService(
      this.API.user.sucursales + '/' + this.usuario.sucId + '/' + this.API.user.clientes,
      'GET',
      null)
      .subscribe((response: any) => {
          console.log(response);
          const responseMensaje = response.Mensaje.reverse();
          let incremento = 1;
          for (const clienteResponse of responseMensaje) {
              this.tipoDeCliente = clienteResponse.tipoCliente;
              /*
              if ( this.tipoDeCliente === 'ESPECIAL') {
                  this.tipoDeCliente = clienteResponse.razonSocial !== '' || clienteResponse.razonSocial == null ? 'C.E.: ' + clienteResponse.razonSocial : 'C.E.: ' + clienteResponse.nombre + ' ' + clienteResponse.paterno + ' ' + clienteResponse.materno;
              } else {
                  this.tipoDeCliente = clienteResponse.razonSocial !== '' || clienteResponse.razonSocial == null ? clienteResponse.razonSocial : clienteResponse.nombre + ' ' + clienteResponse.paterno + ' ' + clienteResponse.materno;
              }
              */
             // console.log(clienteResponse.nombre);
             let tipoCliente;
             clienteResponse.razonSocial !== '' || clienteResponse.razonSocial == null ? tipoCliente = clienteResponse.razonSocial : tipoCliente = clienteResponse.nombre + ' ' + clienteResponse.paterno + ' ' + clienteResponse.materno;
              if ( this.tipoDeCliente !== 'ADMINPAQ' ) {
                  this.clientesArray.push({
                      id: incremento++,
                      idCliente: clienteResponse.id,
                      // tipoCliente: this.tipoDeCliente,
                      clienteEMF: this.tipoDeCliente,
                      tipoCliente: tipoCliente,
                      rfc: clienteResponse.rfc,
                      email: clienteResponse.email,
                      telefono: clienteResponse.telefono,
                      estatusNombre: clienteResponse.estatus.nombre,
                      estatusColor: clienteResponse.estatus.color,
                      sucursal: clienteResponse.sucursalNombre,
                      atendido: clienteResponse.creadoPor,
                      fechaCreacionDia: clienteResponse.fechaCreacion.split('T')[0],
                      // fechaCreacionHora: clienteResponse.fechaCreacion.split('-')[2]
                  });
              }
          }
          console.log( this.clientesArray );
      this.dtTrigger.next(null);
  }, err => {
      console.log(err);
      //Swal('Error', this.GENERALES.algoOcurrio, 'error');
  });
  }

  inverse(){
    this.clientesArrayReverse = this.clientesArray.reverse();
  }

  getPermisos(){
    const peticion = {
      userId: this.usuario.userId,
      codigoFuncionalidad: 'CLIVER'
  };

  this.network.callSecureService(
      this.API.user.permisosFuncionalidad,
      'POST',
      peticion)
      .subscribe((response: any) => {
              this.permisosArray = response.Mensaje;
              this.mostrarBotones();
          }, err => {
              console.log(err);
             // Swal('Error', this.GENERALES.algoOcurrio, 'error');
              this.mostrarBotones();
          }
      );
  }

  selectedRowCliente(info: any){
    
        // console.log(this.permisosArray.length);
        const permisoVerCliente = this.permisosArray.find( permiso => permiso === 'CLIVER' );
        if (permisoVerCliente) {
            this.router.navigate(['dashboard/verCliente/', info ]);
            // info[1]
        } else {
            //Swal('Error', this.GENERALES.noTienePermisos, 'error');
        }
        
  }

  clienteSeleccionado(id: any){
    this.selectedRowCliente(id);
  }

  mostrarBotones(){
    const permisoCrearCliente = this.permisosArray.find( permiso => permiso === 'CLICREA' );
    if (permisoCrearCliente) {
        this.botonesPermisos.crearClie = true;
        document.getElementById('botonCrearCliente').style.opacity = '1';
    } else {
        // Swal('Error', this.GENERALES.noTienePermisos, 'error');
        // this.router.navigate(['/dashboard']);
    }
  }

  listadoDeClientes(){
    
    const JSONSUCURSAL = {
      sucursalNombre: this.sucursal
  };

  this.network.callSecureService(
      'listado/clientes/comercial',
      'POST',
      JSONSUCURSAL
  ).subscribe((response: any) => {
      console.log(response);
      this.arrayListadoDeClientes = response.Mensaje;
  }, err => {
      console.log(err);
  });
  }

  buscarContratoXFolio(){
    
  }

  irAContrato(idContrato){
    this.router.navigate(['dashboard/verCliente/', idContrato, 'contratos' ]);
  }

  listadoDeContratosPorRangoDeFolio(){

  }

  DirDetallesCliente(detallesCliente){
    this.router.navigate(['dashboard/verCliente/', detallesCliente.idCliente ]);
  }

  DirDetallesContrato(detallesCliente){
    this.router.navigate(['dashboard/verCliente/', detallesCliente.idCliente, 'contratos', detallesCliente.idContrato, 'abastecimiento' ]);
  }

  exportTableToExcel(tableID, filename = ''){}

}
