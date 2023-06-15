import MenuItem from '@/components/MenuItem';

export default function Menu() {
  return (
    <div
      className={`
     flex flex-col justify-start items-center text-3xl
     bg-gray-500 w-52 p-2 gap-2
    `}
    >
      <MenuItem texto="Pagina 1" url="/fundamentos/pagina" />
      <MenuItem texto="Pagina 2" url="/pagina" />
    </div>
  );
}
