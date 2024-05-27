import React from "react";
import style from "./descripcion.module.css";

function AtomoTxtPersonal(props){
    return(
     <p id={style.personal}>{props.per}</p>   
    )
}
export default AtomoTxtPersonal;