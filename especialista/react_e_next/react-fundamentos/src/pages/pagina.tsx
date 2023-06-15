import '../app/globals.css';
import Conteudo from '@/components/Conteudo';
import Cabecalho from '@/components/Cabecalho';
import Menu from '@/components/Menu';
import Rodape from '@/components/Rodape';

export default function Pagina() {
  return (
    <div
      className={`
      bg-black text-white h-screen flex flex-col p-4 gap-4
    `}
    >
      <Cabecalho titulo="Daniel" subtitulo="Moscardini" />
      <div className={`
        flex flex-1 gap-5
      `}>
        <Menu />
        <Conteudo>
          <button className={`bg-blue-700 rounded-md`}>
            Teste
          </button>
        </Conteudo>
      </div>
      <Rodape
        textoEsquerda="Obrigado pela preferencia!"
        textoDireita="Volte Sempre!"
      />
    </div>
  );
}
