interface OperacaoMatematica {
  (n1: number, n2: number): number;
}

const soma: OperacaoMatematica = (a: number, b: number) => {
  return a + b;
};

console.log(soma(2, 3));
