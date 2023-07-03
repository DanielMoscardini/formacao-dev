interface Entidade {
    id: number;
}

interface Vendavel {
    nome: string;
    preco: number;
    desconto: number;
}

class Produto implements Entidade, Vendavel {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public desconto: number) { }

    get precoFinal() {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto(123, 'Caneta', 10, 0.2)

console.log(p1);
console.log(p1.precoFinal);



export { }