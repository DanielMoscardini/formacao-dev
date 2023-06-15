export default function Cabecalho(props: any) {
  return (
    <div
      className={`
      flex flex-col justify-center items-center h-36 bg-purple-500 rounded-lg 
    `}
    >
      <h1 className="text-3xl font-black"> {props.titulo}</h1>
      <h2 className="">{props.subtitulo}</h2>
    </div>
  );
}

/*

      <Cabecalho nome={'daniel'} idade={22} />
      <div
        className={`
      flex gap-4 flex-1
      `}
      >
*/
