interface Entidade {
    id: string;
}

interface EntidadeComDatas extends Entidade {
    criadoEm: Date;
    atualizadoEm: Date;
    excluidoEm?: Date;
}

interface Usuario extends EntidadeComDatas {
    nome: string;
    email: string;
    senha?: string;
}

const u1: Usuario = {
    id: 'aaa-123',
    nome: 'Daniel',
    email: 'teste@gmail.com',
    criadoEm: new Date(),
    atualizadoEm: new Date()

}

console.log(u1);

/*
{
  id: 'aaa-123',
  nome: 'Daniel',
  email: 'teste@gmail.com',
  criadoEm: 2023-06-13T18:26:41.306Z,
  atualizadoEm: 2023-06-13T18:26:41.306Z
}
*/

export { }