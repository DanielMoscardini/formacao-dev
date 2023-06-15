import Cabecalho from './Cabecalho';
import Menu from './Menu';
import Conteudo from './Conteudo';
import Rodape from './Rodape';

export default function Pagina(props: any) {
  return (
    <div
      className={`
    flex flex-col gap-4 p-4 h-screen
  `}
    >
      <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}>
        <span>{props.titulo}</span>
        <span>{props.subtitulo}</span>
      </Cabecalho>

      <div
        className={`
        flex flex-1 gap-5
      `}
      >
        <Menu />
        <Conteudo>{props.children}</Conteudo>
      </div>
      <Rodape
        textoEsquerda="Obrigado pela preferencia!"
        textoDireita="Volte Sempre!"
      />
    </div>
  );
}
