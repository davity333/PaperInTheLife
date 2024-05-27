import React from "react";
import style from './recuadrito.module.css'

function Recuadrito(props){
    return(
        <div id={style.cal_rec}>{props.rec}</div>
    )
}

export default Recuadrito;