export class StockModel {
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public cantidad: number,
        public valorTotal: number,
        public valorExento: number,
        public valorImpuestos: number
    ) { }
}