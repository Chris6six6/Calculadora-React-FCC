import React from "react";
import "../hojas-de-estilo/Pantalla.css"

/* Componente con funcion flecha */
const Pantalla = ({input, answer}) => (
    <div id="display" className="input">
        <div id="answer">{answer}</div>
        <div id="input">{input}</div>
    </div>
  );
  

export default Pantalla;