export default function Rodape(props: any) {

  return (
    <div
      className={`
      flex justify-between items-center bg-cyan-600 h-36 text-3xl rounded-lg px-10
    `}
    >
      <span>{props.textoEsquerda}</span>
      <span>{props.textoDireita}</span>
    </div>
  );
}
