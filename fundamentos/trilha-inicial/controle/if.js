const nota = 8;
const bomComportamento = false;

if (nota >= 7 && bomComportamento) {
  console.log('Parabens!');
}

if (nota < 7 && bomComportamento) {
  console.log('Melhore a notas!');
}

if (nota >= 7 && !bomComportamento) {
  console.log('Melhore o comportamento!');
}

console.log('Fim!');
