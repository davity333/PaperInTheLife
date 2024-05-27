import React from "react";
import style from "./descripcion.module.css";

function AtomoTxtCuentos(props){
    return(
        <p id={style.cuento}>{props.cuento}</p>
    )
    
}
export default AtomoTxtCuentos;