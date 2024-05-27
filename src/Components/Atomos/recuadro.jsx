import React from 'react';
import style from './recuadro.module.css'

function Recuadro(props){
  
    return (
      <div id={style.cal_box}>{props.val}</div>
      );
}

export default Recuadro;
