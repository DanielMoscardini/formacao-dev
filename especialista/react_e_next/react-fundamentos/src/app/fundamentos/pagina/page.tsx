import Cabecalho from '@/components/Cabecalho';
import Conteudo from '@/components/Conteudo';
import Rodape from '@/components/Rodape';

export default function Page() {
  return (
    <div
      className={`
      flex flex-col gap-4 p-4 h-screen
    `}
    >
      <Cabecalho nome={"daniel"} idade={22} />
      <Conteudo> 
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Conteudo>
      <Rodape />
    </div>
  );
}
