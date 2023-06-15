import { useState } from 'react';
import '../app/globals.css';


export default function Calculadora() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen gap-4'>
      <input type="number" value={num1} className='rounded-md' />
      <input type="number" value={num2} className='rounded-md' />
    </div>
  )
}