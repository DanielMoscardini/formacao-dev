import Link from 'next/link';

export default function MenuItem(props: any) {
  return (
    <Link
      href={props.url}
      className={`
      bg-zinc-900 text-xl w-full  px-4 py-2 rounded-r-md
    `}
    >
      {props.texto}
    </Link>
  );
}
