class Animal {
    nome: string;
    idade: number;
    constructor(n: string, i: number) {
        this.nome = n;
        this.idade = i;
    }
}

class Cachorro extends Animal {
    raca: string;
    constructor(n: string, i: number, r: string) {
        super(n, i);
        this.raca = r
    }
}

let c1 = new Cachorro('Cacau', 8, 'Dachshund')
console.log(c1); // Cachorro { nome: 'Cacau', idade: 8, raca: 'Dachshund' }


export { }