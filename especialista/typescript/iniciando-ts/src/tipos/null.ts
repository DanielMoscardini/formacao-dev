type User = {
  nome: string;
  email: string;
};

const users: User[] = [
  { nome: 'Daniel', email: 'daniel@gmail.com' },
  { nome: 'Pedro', email: 'pedro@gmail.com' },
  { nome: 'Maria', email: 'maria@gmail.com' },
  { nome: 'Rafaela', email: 'rafaela@gmail.com' }
];
function buscarPorEmail(email: string): User | null {
  return users.find(u => u.email === email) ?? null; // Caso o valor nao seja encontrado, retorne null
}

console.log(buscarPorEmail('daniel@gmail.com')); // { nome: 'Daniel', email: 'daniel@gmail.com' }
console.log(buscarPorEmail('mel@gmail.com')); // null