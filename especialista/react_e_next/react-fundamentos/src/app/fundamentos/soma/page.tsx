export default function Page() {
  let num1, num2: number;
  num1 = 5;
  num2 = 10;
  let soma: number = num1 + num2;
  return (
    <div>
      <h1>A soma de num1 e num2 eh de: {soma}</h1>
      <h1>Gerando um valor aleatorio {Math.random() * 10}</h1>
    </div>
  );
}
