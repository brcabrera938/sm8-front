// import { materialize } from "rxjs/operator/materialize";

export const API: any = {

    // Urls para desarrollo

    'url': 'http://25.86.12.90:8000/api/',
    'fase1': 'http://25.86.12.90:8000/uploads/archivosClientes/fase1/',
    'fase2': 'http://25.86.12.90:8000/uploads/archivosClientes/fase2/',
    'contratos': 'http://25.86.12.90:8000/uploads/archivosClientes/contratos/',
    'imagenesTickets': 'http://25.86.12.90:8000/uploads/imgTickets/',
    'imgComentariosTickets': 'http:25.86.12.90:8000/uploads/imgComentariosTickets/',
    'sinCriterio': 'http:25.86.12.90:8000/uploads/SinCriterio/',
    'imagenesPerfil': 'http://25.86.12.90:8000/uploads/imagenesPerfil/',
    'notificaciones': 'http://sm8-betasoft.ddns.net:3000',

    'login': 'login_check',
    'user': {
        'alquiler': 'alquiler',
        'cliente': 'cliente',
        'clientes': 'clientes',
        'crearCliente': 'nuevocliente',
        'sucursales': 'sucursales',
        'cancelar': 'cancelar',
        'almacenes': 'almacenes',
        'inventario': 'inventario',
        'usuario': 'usuario',
        'usuarios': 'usuarios',
        'usuarioMenu' : 'dashboard/menu',
        'permisosFuncionalidad': 'dashboard/funciones',
        'documentos': 'documentos/',
        'categorias': 'categorias',
        'productos': 'productos',
        'crearProducto': 'addproducto',
        'agregarComentario': 'addcomentario',
        'agregar': 'agregar',
        'autorizar': 'autorizar',
        'editar': 'edit',
        'detalles': 'detalles',
        'traspasos': 'traspasos',
        'listar': 'listar',
        'solicitud': 'solicitud',
        'solicitudes': 'solicitudes',
        'autorizacion': 'autorizacion',
        'gerente': 'gerente',
        'supervisor': 'supervisor',
        'notificaciones': 'dashboard/notificaciones',
        'contratos': 'contratos',
        'contrato': 'contrato',
        'preautorizar': 'preautorizar',
        'crear': 'crear',
        'garantias': 'garantias',
        'abastecimientos': 'abastecimientos',
        'actualizar': 'actualizar',
        'contactos': 'contactos',
        'eliminar': 'eliminar',
        'orden': 'orden',
        'cotizaciones': 'cotizaciones',
        'cotizacion': 'cotizacion',
        'material': 'material',
        'materiales': 'materiales',
        'pedir' : 'pedir',
        'existencias': 'existencias',
        'generar': 'generar',
        'guardar': 'guardar',
        'apoyos': 'apoyos',
        'apoyo' : 'apoyo',
        'incompleto' : 'incompleto',
        'contabilidad': 'contabilidad',
        'lista': 'lista',
        'precios': 'precios',
        'aceptar': 'aceptar',
        'rechazar': 'rechazar',
        'descuento': 'descuento',
        'comentario': 'comentario',
        'sindocs': 'sindocs',
        'aceptada': 'aceptada',
        'ot': 'ot',
        'cambio': 'cambio',
        'tickets': 'tickets',
        'soporte': 'soporte',
        'atendiendo': 'atendiendo',
        'resuelto': 'resuelto',
        'evaluar': 'evaluar',
        'imagenes': 'imagenes',
        'subir': 'subir',
        'stock': 'stock',
        'ordenes': 'ordenes',
        'comentar': 'comentar',
        'entradas': 'entradas',
        'salidas': 'salidas',
        'salida': 'salida',
        'reservado': 'reservado',
        'obra': 'obra',
        'indicadores': 'indicadores',
        'controlInterno': 'controlInterno',
        'movimientos': 'movimientos',
        'espera': 'espera',
        'asignacion': 'asignacion',
        'folios': 'folios',
        'resguardo': 'resguardo',
        'faltante': 'faltante',
        'total': 'total',
        'mensajes': {
            'enviar': 'mensajes/enviar',
            'obtener': 'mensajes/obtener',
            'visto': 'mensajes/visto'
        },
        'solicitados': 'solicitados',
        'solicitado': 'solicitado',
        'enviado': 'enviado',
        'evaluacion': 'evaluacion',
        'respuesta': 'respuesta',
        'fisico': 'fisico',
        'archivos': 'archivos',
        'guarda': 'guarda',
        'cantidad': 'cantidad',
        'aceptado': 'aceptado',
        'sucursal': 'sucursal',
        'informe': 'informe',
        'estatus': 'estatus',
        'sondeo': 'sondeo',
        'rechaza': 'rechaza',
        'apoyado': 'apoyado',
        'solicitar': 'solicitar',
        'recoleccion': 'recoleccion',
        'mis': 'mis',
        'general': 'general',
        'marcar': 'marcar',
        'todas': 'todas',
        'leidas': 'leidas',
        'preautorizadas': 'preautorizadas',
        'modificar': 'modificar',
        'producto': 'producto',
        'almacen': 'almacen',
        'catalogo': 'catalogo',
        'buscar': 'buscar',
        'dar': 'dar',
        'regresar': 'regresar',
        'diferencia': 'diferencia',
        'finalizar': 'finalizar',
        'trabajo': 'trabajo',
        'traspaso': 'traspaso',
        'obtenidos': 'obtenidos',
        'proveedores': 'proveedores',
        'compra': 'compra',
        'completo' : 'completo',
        'noperteneciente': 'noperteneciente',
        'todos': 'todos',
        'pagare': 'pagare',
        'conversacion': 'conversacion',
        'ingresar': 'ingresar',
        'ajustar': 'ajustar',
        'ajustes' : 'ajustes',
        'ajuste' : 'ajuste',
        'parcial': 'parcial',
        'logistica': 'logistica'
    },
};

export const PAGE: any = {
    'dashboard': '/dashboard/',
    'listarClientes': {
        'verClienteBtn': 'Ver Cliente',
        'editarClienteBtn': 'Editar Cliente'
    },
    'verCliente': {
        'verDocumento': 'Ver Documento',
        'verComentario': 'Comentarios',
        'autorizarCliente': 'Autorizar Cliente',
        'autorizarDocumento': 'Autorizar Documento',
        'rechazarDocumento': 'Rechazar Documento',
        'autorizarContrato': 'Autorizar',
        'rechazarContrato': 'Rechazar',
        'preautorizar': 'Pre-autorizar',
        'descargarDocumento': 'Ampliar Documento',
        'escribirMensaje': 'Escribe tu mensaje aqui...'
    },
    'verProducto': {
        'faltaSKUAlmacen': 'Falta el SKU del Producto o Almac??n o Cantidad',
        'productoAgregado': 'Se agreg?? el producto'
    }
};

export const FORMS: any = {
    'login': {
        'title': 'Member Login',
        'button': 'Iniciar Sesi??n',
        'required': 'El campo es requerido',
        'username': {
            'placeholder': 'Usuario'
        },
        'password': {
            'placeholder': 'Contrase??a'
        },
        'error': {
            'badCredentials' : 'Usuario o Constrase??a Err??neos',
        }
    },
    'crearCliente': {
        'required': '* El campo es requerido',
        'button': 'Crear Cliente',
        'buttonAuth': 'Autorizar Cliente',
        'rfc': {
            'titulo': 'RFC del Cliente *',
            'placeholder': 'SMS1505...',
            'minlength': 'El campo debe tener como m??nimo 10 car??cteres',
            'maxlength': 'El campo debe tener como m??ximo 12 car??cteres'
        },
        'nombre': {
            'titulo': 'Nombre',
            'placeholder': 'Nombre'
        },
        'paterno': {
            'titulo': 'Apellido paterno',
            'placeholder': 'Apellido paterno'
        },
        'materno': {
            'titulo': 'Apellido Materno',
            'placeholder': 'Apellido Materno'
        },
        'razonSocial': {
            'titulo': 'Raz??n Social *',
            'placeholder': 'SISTEMAS MULTIDIRECCIONALES ...'
        },
        'sucursal': {
            'titulo': 'Sucursal *',
            'placeholder': 'Seleccionar'
        },
        'calle': {
            'titulo': 'Calle',
            'placeholder': 'Domicilio Fiscal'
        },
        'noext': {
            'titulo': 'No. Exterior',
            'placeholder': '#'
        },
        'noint': {
            'titulo': 'No. Interior',
            'placeholder': '#'
        },
        'colonia': {
            'titulo': 'Colonia',
            'placeholder': 'Domicilio Fiscal'
        },
        'delegacion': {
            'titulo': 'Delegaci??n o Municipio',
            'placeholder': 'Domicilio Fiscal'
        },
        'codigopostal': {
            'titulo': 'C??digo Postal',
            'placeholder': 'Domicilio Fiscal'
        },
        'telefono': {
            'titulo': 'Tel??fono',
            'placeholder': 'Tel??fono'
        },
        'celular': {
            'titulo': 'Celular',
            'placeholder': 'Celular'
        },
        'email': {
            'titulo': 'Email',
            'placeholder': 'ejemplo@ejemplo.com'
        },
        'domicilioCliente': 'Domicilio Particular',
        // Documentos requeridos Primer Paso
        'ine': {
            'titulo': 'INE',
        },
        'sat': {
            'titulo': 'SAT',
        },
        'buro': {
            'titulo': 'Bur?? de Cr??dito',
        },
        'acta': {
            'titulo': 'Acta Constitutiva',
        },
        'poder': {
            'titulo': 'Poder Notarial',
        },
        'depositoGarantia': {
            'titulo': 'Deposito en garantia (Minimo por $4000.00)'
        },
        'domicilio': {
            'titulo': 'Comprobante de Domicilio (no mayor a 3 meses de antiguedad)'
        },
        'aviso_privacidad': {
            'titulo': 'Aviso de Privacidad',
        },
        'caratula_bancaria': {
            'titulo': 'Car??tula bancar??a',
        },
        // Documentos Requeridos Segundo Paso
        'contrato': {
            'titulo': 'Contrato',
        },
        'factura': {
            'titulo': 'Factura',
        },
        'pagare': {
            'titulo': 'Pagar??',
        },
        'ordenTrabajo': {
            'titulo': 'Orden de Trabajo',
        },
        'comprobantePago': {
            'titulo': 'Comprobante de Pago',
        },
        'avalIne': {
            'titulo': 'INE del Aval'
        },
        'avalDomicilio': {
            'titulo': 'Comprobante de domicilio del Aval',
        },
        'otro1': {
            'titulo': 'Otro documento 1 (Opcional)',
        },
        'otro2': {
            'titulo': 'Otro documento 2 (Opcional)',
        },
        // Comentarios
        'comentario': {
            'titulo': 'Comentario',
            'placeholder': 'Escribir ...'
        },
        'comentarioArchivos': {
            'boton': 'Comentar',
            'placeholder': 'Comentario ...'
        }

    },
    'crearProducto': {
        'sku': 'SKU *',
        'descripcion': 'Descripci??n *',
        'categoria': 'Categor??a *',
        'sucursal': 'Sucursal',
        'precioventa': '* Precio Venta $ ',
        'precioventamin': '* Precio Venta M??nimo $ ',
        'preciorenta': '* Precio Renta $ ',
        'preciorentamin': '* Precio Renta M??nimo $ ',
        'peso': '* Peso Kg. ',
        'agreagarAlmacen': 'Agregar a Almac??n'
    }

};

// Comentarios reusables
export const GENERALES: any = {
    'cargandoMenu': 'Cargando Menu...',
    'queDeseaHacer': '??Qu?? Desea Hacer?',
    'algoOcurrio': 'Revisa tu conexi??n',
    'editar': 'Editar',
    'ver': 'Ver',
    'borrar': 'Borrar',
    'noTienePermisos': 'Lo sentimos pero no cuenta con los permisos para ver esta secci??n',
    'logOut': ' Cerrar Sesion'
};

// Codigo de funcionalidad con rutas
export const CODFUNC = [
    { codFunc: 'CLIVER', nombre: 'Clientes (Documentacion)', url: 'listarClientes', icon: 'mdi-folder-account'},
    { codFunc: 'CPAVER', nombre: 'Clientes Pre-autorizados', url: 'listarClientesPreautorizados', icon: 'mdi-account-minus' },
    { codFunc: 'COTVER', nombre: 'Cotizaciones', url: 'cotizaciones', icon: 'mdi-pen'},
    { codFunc: 'ORDVER', nombre: 'Orden de Trabajo', url: 'listarOrdenTrabajo', icon: 'mdi-factory'},
    { codFunc: 'SLEVER', nombre: 'Solicitudes de existencias', url: 'listarSolicitudesExistencias', icon: 'mdi-format-list-bulleted'},
    { codFunc: 'APOVER', nombre: 'Apoyos almac??n', url: 'listarSolicitudesApoyo', icon: 'mdi-rotate-left-variant' },
    { codFunc: 'COMVER', nombre: 'C??lculo de comisiones', url: 'comisiones', icon: 'mdi-calculator' },
    { codFunc: 'ORPVER', nombre: 'Ordenes pendientes', url: 'listarClienteOrdenPendiente', icon: 'mdi-content-paste' },
    { codFunc: 'ICIVER', nombre: 'Indicador', url: 'indicador', icon: 'mdi-format-italic' },
    { codFunc: 'MALVER', nombre: 'Men?? Almac??n', url: 'menuAlmacen', icon: 'mdi-grid' },
    { codFunc: 'MATVER', nombre: 'Material', url: 'material', icon: 'mdi-package-variant-closed' },
    { codFunc: 'CINVER', nombre: 'Clientes y Kardex', url: 'listarClientesIntiza', icon: 'mdi-account-box' },
    { codFunc: 'EVAVER', nombre: 'Evaluacion de personal', url: 'listarUsuariosEvaluacion', icon: 'mdi-clipboard-check' },
    { codFunc: 'INCVER', nombre: 'Incidencias', url: 'asistencias', icon: 'mdi-account-alert' },
    { codFunc: 'NCTVER', nombre: 'Cotizador', url: 'cotisaciones', icon: 'mdi-domain' },
    { codFunc: 'SLTVER', nombre: 'Solicitud de Transferencia', url: 'solicitudTransferencias', icon: 'mdi-currency-usd' },
    // { codFunc: 'LISEXIS'} ya no
];

export const PETICION: any = {
    'error': {
        'e401': 'Sesi??n Expirada. Inicie sesi??n nuevamente',
    }
};