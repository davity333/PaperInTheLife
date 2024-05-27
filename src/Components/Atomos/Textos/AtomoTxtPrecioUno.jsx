import React from "react";
import style from "./descripcion.module.css";

function AtomoTxtPrecioUno(props){
    return(
        <>
        <p id={style.precioUno}>{props.preciouno}</p>
        <p id={style.precioDos}>{props.precioDos}</p>
        <p id={style.precioTres}>{props.precioTres}</p>
        </>
    )

}

export default AtomoTxtPrecioUno