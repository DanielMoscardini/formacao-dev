type ContaCorrente = {
  numConta: number;
  saldo: number;
  movimentar: (valor: number) => void;
};

type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;
}

const clientes: Cliente[] = [
  {
    nome: 'Daniel',
    email: 'daniel@gmail.com',
    contas: [
      { numConta: 1, saldo: 100, movimentar },
      { numConta: 2, saldo: 0, movimentar }
    ]
  },
  {
    nome: 'Joao',
    email: 'joao@gmail.com',
    contas: [{ numConta: 123, saldo: 1500, movimentar }]
  }
];

function movimentarConta(numConta: number, valor: number) {
  const conta = clientes
    .map(cli => {
      return cli.contas.find(cc => cc.numConta === numConta);
    })
    .filter(c => c)[0];
  conta?.movimentar(valor);
  console.log(conta);
}

movimentarConta(123, 200);
