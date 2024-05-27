import React from "react";
import style from "./descripcion.module.css";

function Texas(props){
    return(
        <p id={style.texas}>{props.texas}</p>
    )
}

export default Texas;