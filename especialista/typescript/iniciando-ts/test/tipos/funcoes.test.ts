import { saudacao } from '../../src/tipos/funcoes';
import { multiplicar } from '../../src/tipos/funcoes';

test('Deve retornar uma saudacao baseada no nome da pessoa', () => {
  const s = saudacao('Daniel');
  expect(s).toBe(`Ola Daniel! Passar bem!`);
});

test('Deve retornar a multiplicacao de dois numeros', () => {
  const m = multiplicar(2, 4);
  expect(m).toBe(8);
});
