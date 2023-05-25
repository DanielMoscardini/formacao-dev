let operacao: (a: number, b: number) => number;

let somar = (n1: number, n2: number): number => n1 + n2;

operacao = somar;

console.log(operacao(2, 4));
