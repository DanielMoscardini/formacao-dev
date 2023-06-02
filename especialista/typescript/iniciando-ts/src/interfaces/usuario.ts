interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string;
}

const usuarioLogado: Usuario = {
  id: 123,
  nome: 'Joao',
  email: 'joao@gmail.com'
};
console.log(usuarioLogado);

const usuarioOpcional: Partial<Usuario> = {
  id: 456,
  senha: 'Teste'
};
console.log(usuarioOpcional);

const usuarioCompleto: Required<Usuario> = {
  id: 789,
  nome: 'Daniel',
  email: 'daniel@gmail.com',
  senha: 'abc'
};
console.log(usuarioCompleto);

export {};
