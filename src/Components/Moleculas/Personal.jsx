import { useState } from 'react';
import React from 'react'
import AtomoTxtPersonal from '../Atomos/Textos/AtomoTxTPersonal';
import mysql from '../../data/mysql';


import style from './imagenes.module.css';
import fotos from '../../data/fotos2';
function Personal(){
    return (
        <>
        <AtomoTxtPersonal per={"Personal"}></AtomoTxtPersonal>

        <div id={style.fotos}>
        {mysql.products.map(product => (
            <img key={product.image} src={product.image} alt="" />
        ))}
        </div>

        <div id={style.fotos2}>
        {fotos.images.map(product => (
            <img key={product.image} src={product.image} alt="" />
        ))}
        </div>

        </>

    );
}

export default Personal;

/*

            {
            mysql.products.map(product => (
                <img id='' key={product.image} src={product.image} alt="" />
            ))}
            */
