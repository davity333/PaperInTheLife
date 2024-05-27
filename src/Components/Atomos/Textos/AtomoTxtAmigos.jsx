import React from "react";
import style from "./descripcion.module.css";

function AtomoTxtAmigos(props){
    return(
        <p id={style.amigos}>{props.friends}</p>
    )

}
export default AtomoTxtAmigos;