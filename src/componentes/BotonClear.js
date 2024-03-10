import React from "react";
import "../hojas-de-estilo/Boton.css"

const BotonClear = (props) =>(
    <div id="clear" className="boton-contenedor boton-clear ac" onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonClear;