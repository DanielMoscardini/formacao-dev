export default function Conteudo(props: any) {
  
  return (
    <div className={`
      flex justify-center items-center flex-1 text-3xl bg-emerald-500 rounded-lg
    `}
    >
      {props.children}
    </div>
  )
}