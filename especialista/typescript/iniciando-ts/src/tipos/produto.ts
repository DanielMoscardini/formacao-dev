type Produto = {
  nome: string;
  preco: number;
  desconto: number;
  precoComDesconto: (preco: number, desconto: number) => number;
};

let produto1: Produto = {
  nome: 'Notebook',
  preco: 2000,
  desconto: 0.1,
  precoComDesconto: (preco: number, desconto: number): number =>
    preco - preco * desconto
};

console.log(produto1);
/*
{
  nome: 'Notebook',
  preco: 2000,
  desconto: 0.1,
  precoComDesconto: [Function: precoComDesconto]
}
*/
console.log(produto1.preco); // 2000
console.log(produto1.desconto); // 0.1
console.log(produto1.precoComDesconto(produto1.preco, produto1.desconto)); // 1800
