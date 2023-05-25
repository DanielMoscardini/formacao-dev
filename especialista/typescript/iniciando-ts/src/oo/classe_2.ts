class Curso {
  constructor(readonly id: number, public nome?: string) {
    if (id < 1) throw new Error('Id invalido!')
  }
}

const c1 = new Curso(123, 'Daniel');
c1.nome = 'Iniciando com TS';

const c2 = new Curso(124);

console.log(c1);
console.log(c2);

export {};
