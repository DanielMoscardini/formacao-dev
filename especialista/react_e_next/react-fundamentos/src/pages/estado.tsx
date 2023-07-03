import { useState } from 'react';
import '../app/globals.css';
export default function Estado() {
  let [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }

  function decrementar() {
    setNumero(numero - 1);
  }

  return (
    <div className={`flex justify-center items-center h-screen gap-5`}>
      <button
        onClick={decrementar}
        className={`bg-blue-500 p-2 rounded-lg w-8`}
      >
        -
      </button>
      Numero: {numero}
      <button onClick={incrementar} className="bg-blue-500 p-2 rounded-lg w-8">
        +
      </button>
    </div>
  );
}
