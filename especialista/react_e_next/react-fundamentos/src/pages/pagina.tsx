import '../app/globals.css';
import Conteudo from '@/components/Conteudo';
import Cabecalho from '@/components/Cabecalho';
import Rodape from '@/components/Rodape';

export default function Pagina() {
  return (
    <div
      className={`
      bg-black text-white h-screen flex flex-col p-4 gap-4
    `}
    >
      <Cabecalho nome='Daniel' idade={22}/>
      <Conteudo />
      <Rodape textoEsquerda='Obrigado pela preferencia!' textoDireita='Volte Sempre!'/>
    </div>
  );
}
