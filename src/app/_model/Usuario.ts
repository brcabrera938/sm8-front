export class Usuario {

    constructor(
        public nombre: string = '',
        public userId: string = '',
        public userName: string = '',
        public apellido: string = '',
        public rol: string = '',
        public sucNombre: string = '',
        public sucId: string = '',
        public sucTelefono: string = '',
        public imagenPerfil = '',
        public permisos = [],
        public email = '',
        public grupoNombre = '',
        public celular = ''
    ) { }

}