export default function Cabecalho(props: any) {
  return (
    <div
      className={`
      flex flex-col justify-center items-center h-36 bg-purple-500 rounded-lg 
    `}
    >
       <h1 className="text-3xl font-black"> {props.nome}</h1> 
       <h2 className="">
        {props.idade}
       </h2>
    </div>
  );
}
