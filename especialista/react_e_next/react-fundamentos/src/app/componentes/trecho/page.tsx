export default function Page() {
  const nomes = [
    <div key={1}>Galadriel</div>,
    <div key={2}>Cirdan</div>,
    <div key={3}>Gil-Galad</div>
  ];
  return <div>{nomes[2]}</div>;
}
