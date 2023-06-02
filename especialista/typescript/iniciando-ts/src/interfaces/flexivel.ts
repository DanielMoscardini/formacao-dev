interface Flexivel {
  nome: string;
  [atrib: string]: any;
}

const f1: Flexivel = {
  nome: 'Daniel',
  idade: 22,
  male: true
};

console.log(f1);
