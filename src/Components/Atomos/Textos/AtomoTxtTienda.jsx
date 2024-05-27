import React from "react";
import style from "./descripcion.module.css";

function AtomoTxtTienda(props){
    return(
        <p id={style.tienda}>{props.tienda}</p>
    )
    
}
export default AtomoTxtTienda