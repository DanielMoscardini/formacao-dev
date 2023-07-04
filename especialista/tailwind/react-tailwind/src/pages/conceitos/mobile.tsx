export default function Mobile() {
  return (
    <div
      className={`
        flex justify-center items-center
        bg-red-500 h-48
        text-3xl md:text-4xl lg:text-5xl
    `}
    >
      <span className="inline sm:hidden ">Mobile</span>
      <span className="hidden sm:inline">Nao mobile</span>
    </div>
  );
}
