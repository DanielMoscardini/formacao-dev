import Pagina from '@/components/Pagina';
import Cabecalho from '@/components/Cabecalho';
import Conteudo from '@/components/Conteudo';
import Menu from '@/components/Menu';
import Rodape from '@/components/Rodape';

export default function Page() {
  return (
    <Pagina titulo="Daniel" subtitulo="Moscardini">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Pagina>
  );
}
