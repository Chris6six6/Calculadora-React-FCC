import './App.css';
import calclogo from "./imagenes/Calculadora_logo.png";
import Boton from "./componentes/Boton";
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import BotonEquals from './componentes/BotonEquals';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const agregarInput = val =>
  {
    if (input === "0" && val !== ".") {
      setInput(val);
    }
    else if (val === "." && input.includes("."))
    {
      // Evitar la inserción de múltiples puntos decimales en un número
      const lastNumber = input.split(/[+\-*/]/).pop();
      if (lastNumber.includes("."))
      {
        return;
      }
      setInput(input + val);
    }
    else
    {
      setInput(input + val); // Concatenar val a la entrada actual
      //setAnswer("");
    }
  };
  

  const resultado = () => {
console.log("\nInput: " + input);
    if (!(/[+\-*/]/.test(input))) {
      setAnswer(input);
      setInput("");
      return;
    }

    let corrected = input.replace(/([+.*/-])\1+/g, '$1');
    if (!(/[+\-*/]/.test(corrected))) {
      setInput(input);
      return;
    }

    corrected = (answer+corrected).replace(/([+*])-(?![0-9])|\/(?=[+*])/g, '');
    const result = evaluate(corrected);

//console.log("Input2: " + corrected);
console.log("Resultado: " + evaluate(corrected));
    setAnswer(result);
    setInput("");
  };


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={calclogo} className='logo' alt='logo calc'/>
      </div>

      <div className='contenedor-calculadora'>

        <Pantalla input={input} answer={answer}/>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <BotonClear manejarClear={() => {setInput("0"); setAnswer("");}}>AC</BotonClear>

          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonEquals manejarClick={resultado}>=</BotonEquals>
        </div>
      </div>
    </div>
  );
}

export default App;
