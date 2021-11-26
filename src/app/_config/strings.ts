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
        'faltaSKUAlmacen': 'Falta el SKU del Producto o Almacén o Cantidad',
        'productoAgregado': 'Se agregó el producto'
    }
};

export const FORMS: any = {
    'login': {
        'title': 'Member Login',
        'button': 'Iniciar Sesión',
        'required': 'El campo es requerido',
        'username': {
            'placeholder': 'Usuario'
        },
        'password': {
            'placeholder': 'Contraseña'
        },
        'error': {
            'badCredentials' : 'Usuario o Constraseña Erróneos',
        }
    },
    'crearCliente': {
        'required': '* El campo es requerido',
        'button': 'Crear Cliente',
        'buttonAuth': 'Autorizar Cliente',
        'rfc': {
            'titulo': 'RFC del Cliente *',
            'placeholder': 'SMS1505...',
            'minlength': 'El campo debe tener como mínimo 10 carácteres',
            'maxlength': 'El campo debe tener como máximo 12 carácteres'
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
            'titulo': 'Razón Social *',
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
            'titulo': 'Delegación o Municipio',
            'placeholder': 'Domicilio Fiscal'
        },
        'codigopostal': {
            'titulo': 'Código Postal',
            'placeholder': 'Domicilio Fiscal'
        },
        'telefono': {
            'titulo': 'Teléfono',
            'placeholder': 'Teléfono'
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
            'titulo': 'Buró de Crédito',
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
            'titulo': 'Carátula bancaría',
        },
        // Documentos Requeridos Segundo Paso
        'contrato': {
            'titulo': 'Contrato',
        },
        'factura': {
            'titulo': 'Factura',
        },
        'pagare': {
            'titulo': 'Pagaré',
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
        'descripcion': 'Descripción *',
        'categoria': 'Categoría *',
        'sucursal': 'Sucursal',
        'precioventa': '* Precio Venta $ ',
        'precioventamin': '* Precio Venta Mínimo $ ',
        'preciorenta': '* Precio Renta $ ',
        'preciorentamin': '* Precio Renta Mínimo $ ',
        'peso': '* Peso Kg. ',
        'agreagarAlmacen': 'Agregar a Almacén'
    }

};

// Comentarios reusables
export const GENERALES: any = {
    'cargandoMenu': 'Cargando Menu...',
    'queDeseaHacer': '¿Qué Desea Hacer?',
    'algoOcurrio': 'Revisa tu conexión',
    'editar': 'Editar',
    'ver': 'Ver',
    'borrar': 'Borrar',
    'noTienePermisos': 'Lo sentimos pero no cuenta con los permisos para ver esta sección',
    'logOut': ' Cerrar Sesion'
};

// Codigo de funcionalidad con rutas
export const CODFUNC = [
    { codFunc: 'CLIVER', nombre: 'Clientes (Documentacion)', url: 'listarClientes', icon: 'mdi-folder-account'},
    { codFunc: 'CPAVER', nombre: 'Clientes Pre-autorizados', url: 'listarClientesPreautorizados', icon: 'mdi-account-minus' },
    { codFunc: 'COTVER', nombre: 'Cotizaciones', url: 'cotizaciones', icon: 'mdi-pen'},
    { codFunc: 'ORDVER', nombre: 'Orden de Trabajo', url: 'listarOrdenTrabajo', icon: 'mdi-factory'},
    { codFunc: 'SLEVER', nombre: 'Solicitudes de existencias', url: 'listarSolicitudesExistencias', icon: 'mdi-format-list-bulleted'},
    { codFunc: 'APOVER', nombre: 'Apoyos almacén', url: 'listarSolicitudesApoyo', icon: 'mdi-rotate-left-variant' },
    { codFunc: 'COMVER', nombre: 'Cálculo de comisiones', url: 'comisiones', icon: 'mdi-calculator' },
    { codFunc: 'ORPVER', nombre: 'Ordenes pendientes', url: 'listarClienteOrdenPendiente', icon: 'mdi-content-paste' },
    { codFunc: 'ICIVER', nombre: 'Indicador', url: 'indicador', icon: 'mdi-format-italic' },
    { codFunc: 'MALVER', nombre: 'Menú Almacén', url: 'menuAlmacen', icon: 'mdi-grid' },
    { codFunc: 'MATVER', nombre: 'Material', url: 'material', icon: 'mdi-package-variant-closed' },
    { codFunc: 'CINVER', nombre: 'Clientes y Kardex', url: 'listarClientesIntiza', icon: 'mdi-account-box' },
    { codFunc: 'EVAVER', nombre: 'Evaluacion de personal', url: 'listarUsuariosEvaluacion', icon: 'mdi-clipboard-check' },
    { codFunc: 'INCVER', nombre: 'Incidencias', url: 'asistencias', icon: 'mdi-account-alert' },
    { codFunc: 'NCTVER', nombre: 'Cotizador', url: 'cotisaciones', icon: 'mdi-domain' },
    { codFunc: 'SLTVER', nombre: 'Solicitud de Transferencia', url: 'solicitudTransferencias', icon: 'mdi-currency-usd' },
    // { codFunc: 'LISEXIS'} ya no
];