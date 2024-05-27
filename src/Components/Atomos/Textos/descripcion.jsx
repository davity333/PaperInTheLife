import React from "react";
import style from "./descripcion.module.css";

function Descripcion (props){
    return(
         <p id={style.description}>{props.des}</p>

    )
}

export default Descripcion;