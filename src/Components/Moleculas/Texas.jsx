import React from 'react';
import AtomoTxtTexas from '../Atomos/Textos/AtomoTxtTexas';

import linea from '../imagenes/linea.png';
import style from './imagenes.module.css';
import texas from '../../data/texas';
import texasdos from '../../data/texasdos';

function Texas(){

    return(    
        <>
        <img id={style.line} src={linea} />
        <AtomoTxtTexas texas={"TEXAS CHAINSAW MASSACRE"}></AtomoTxtTexas>

        <div id={style.texas}>
        {texas.tex.map(product => (
            <img key={product.image} src={product.image} alt="" />
        ))}
        </div>

        <div id={style.sawyer}>
        {texasdos.sawyer.map(product => (
            <img key={product.image} src={product.image} alt="" />
        ))}
        </div>

        <img id={style.lineados} src={linea} />
        </>

    )

}

export default Texas;