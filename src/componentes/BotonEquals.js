import React from "react";
import "../hojas-de-estilo/BotonEquals.css"

const BotonEquals = (props) => (
    <div id="equals" className="boton-equals" onClick={props.manejarClick}>
        {props.children}
    </div>
);

export default BotonEquals;