const Erros = {
  NOME_NULO: 'nome_nulo',
  EMAIL_NAO_CADASTRADO: 'email_nao_cadastrado',
  URL_INVALIDA: 'url_invalida'
} as const

let erro: string;
erro = Erros.NOME_NULO;
console.log(erro);
