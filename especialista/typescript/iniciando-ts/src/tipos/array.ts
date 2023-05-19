let hobbies: string[] = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies[0]); // cozinhar

// Definicao de tipo fixo no array
const endereco: [string, number] = ['Rua A', 99];
console.log(endereco); // [ 'Rua A', 99 ]

// Dois tipos no array.
const aluno: (string | number)[] = ['daniel', 1, 23, 'Ian'];
console.log(aluno); // [ 'daniel', 1, 23, 'Ian' ]