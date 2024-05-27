import React from "react";
import AtomoTxtTienda from "../Atomos/Textos/AtomoTxtTienda";

import style from './imagenes.module.css';
import AtomoTxtCuentos from "../Atomos/Textos/AtomoTxtCuentos";

import cuento from '../imagenes/cuento.jpg';
import slaughter from '../imagenes/slaughter.jpg';
import taquero from '../imagenes/taquero.jpg';

import AtomoTxtPrecioUno from "../Atomos/Textos/AtomoTxtPrecioUno";

function Tienda(){

    return(
        <>
        <AtomoTxtTienda tienda={"TIENDA"}></AtomoTxtTienda>
        <AtomoTxtCuentos cuento={"CUENTOS"}></AtomoTxtCuentos>

        <img src={cuento} id={style.libro} />
        <img src={slaughter} id={style.slaughter} />
        <img src={taquero} id={style.taquero} />

        <AtomoTxtPrecioUno preciouno={"18$"}></AtomoTxtPrecioUno>
        <AtomoTxtPrecioUno precioDos={"25$"}></AtomoTxtPrecioUno>
        <AtomoTxtPrecioUno precioTres={"40$"}></AtomoTxtPrecioUno>
        </>
    )
    

}

export default Tienda;