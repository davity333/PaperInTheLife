import { useState } from 'react';
import React from 'react';
import Recuadro from '../Atomos/recuadro';
import Recuadrito from '../Atomos/recuadrito';

//IMAGENES
import logo from '../imagenes/logo.png'; //SE IMPORTA LA RUTA DE LA IMAGEN
import lapiz from '../imagenes/lapiz.png';
import inicio from '../imagenes/iniciar.png';
import registro from '../imagenes/registrate.png';

import style from './imagenes.module.css';



function Encabezado(){
    return (
        <>

        <Recuadro val={''}></Recuadro>
        <Recuadrito rec={''}></Recuadrito>
       
        <img id={style.inicio} src={inicio}/> 
        <img id={style.registro} src={registro}/> 

        <img id={style.logo} src={logo}/>  
        <img id={style.lapiz} src={lapiz}/> 
        

        <p id={style.texto} >PaperInTheLife</p>

        <p id={style.collections}>COLLECTIONS</p>
        
        </>
    )
}

export default Encabezado;

