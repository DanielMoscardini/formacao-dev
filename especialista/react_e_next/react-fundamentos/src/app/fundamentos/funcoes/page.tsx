export default function Page() {
  function renderizarTitulo() {
    return (
      <div>
        <h1>Titulo</h1>
        <h3>SubTitulo</h3>
      </div>
    );
  }

  function renderizarElfos() {
    return (
      <div>
        <ul>
          <li>Elrond</li>
          <li>Galadriel</li>
          <li>Gil-Galad</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      {renderizarTitulo()}
      {renderizarElfos()}
    </div>
  );
}
