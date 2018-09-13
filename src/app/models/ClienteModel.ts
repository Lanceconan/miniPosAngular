export class ClienteModel{
    constructor( 
        public id: number,
        public rut: string,
        public nombre:string,
        public apellidoPaterno:string,
        public apellidoMaterno: string,
        public fechaNacimiento: Date,
        public nacionalidad: string        
    ){}
}