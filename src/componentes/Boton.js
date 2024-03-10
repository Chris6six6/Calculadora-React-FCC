import React from "react";
import "../hojas-de-estilo/Boton.css"

function Boton(props)
{
    const esOperador = valor =>
    {
        return isNaN(valor) && (valor!=="=") && (valor!==".");
    }

    return(
        <div id={`${assignId(props.children)}`}
        className={`boton-contenedor ${esOperador(props.children)? "operador": ""}`.trimEnd()}
        onClick={()=>props.manejarClick(props.children)}>
        {props.children}
        </div>
    );
}

function assignId(number) {
    let id;
    switch(number) {
        case "0":
            id = "zero";
            break;
        case "1":
            id = "one";
            break;
        case "2":
            id = "two";
            break;
        case "3":
            id = "three";
            break;
        case "4":
            id = "four";
            break;
        case "5":
            id = "five";
            break;
        case "6":
            id = "six";
            break;
        case "7":
            id = "seven";
            break;
        case "8":
            id = "eight";
            break;
        case "9":
            id = "nine";
            break;
        case "+":
            id = "add";
            break;
        case "-":
            id = "subtract";
            break;
        case "*":
            id = "multiply";
            break;
        case "/":
            id = "divide";
            break;
        case ".":
            id = "decimal";
            break;
        default:
            id = "number not in range";
    }
    return id;
}



export default Boton;