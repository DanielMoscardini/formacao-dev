import Validador from './Validador';

class Produto {
  constructor(
    public readonly id: number,
    public readonly nome: string,
    public readonly preco: number,
    public readonly desc: number = 0
  ) {
    Validador.maiorQueZero(id, 'Id invalido!');
    Validador.tamanhoEntre(nome, 2, 250, 'Nome invaliudo')
    Validador.maiorQueZero(preco, 'Preco invalido!');
    Validador.entre(desc, 0.1, 0.8, 'Desconto Invalido')
  }

  get precoFinal() {
    return this.preco * (1 - this.desc);
  }
}

const p1 = new Produto(1, 'Lapis', 10, 0.1);
console.log(p1.preco); // 10
console.log(p1.precoFinal); // 9

export {};
