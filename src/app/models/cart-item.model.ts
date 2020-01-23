export class CartItem {
    constructor(
        public id: string,
        public descricao: string,
        public quantidade: number,
        public preco: number,
        public imagem: string) {
        
    }
}