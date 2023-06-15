import { useState } from 'react';
import '../app/globals.css';
export default function Estado() {
  let [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }

  return (
    <div className="flex flex-col">
      Numero: {numero}
      <button onClick={incrementar} className="bg-blue-500 p-2 rounded-md w-24">
        Incrementar
      </button>
    </div>
  );
}
