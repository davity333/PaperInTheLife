import { useState } from 'react';
import React from 'react';

import Descripcion from '../Atomos/Textos/descripcion';

import dibujovit from '../imagenes/dibujovity.png';
import bordeIzquierda from '../imagenes/degradado1.png';
import bordeDerecho from '../imagenes/degradado2.png';
import powerpoint from '../imagenes/powerpoint.png';
import youtube from '../imagenes/youtube.png';
import linea from '../imagenes/linea.png';

import style from './imagenes.module.css';


function Introduccion(){
    return(
        <>
<img id={style.powerpoint} src={powerpoint} />
<img id={style.bordeizquierdo} src={bordeIzquierda}/>
<img id={style.bordeDerecho} src={bordeDerecho} />
<img id={style.youtube} src={youtube} />

<Descripcion des={"Mi nombre es David Reynold Guzman Castro, tengo 18 años y resido en Suchiapas de Chiapas. Actualmente me dedico a la creación de páginas web y frontend, además de ser un creador de contenido. También tengo conocimientos basico en dibujo digital y animación 2D."}></Descripcion>
<img id={style.dibujovit} src={dibujovit} />
<img id={style.linea} src={linea}/>


</>
    )
}

export default Introduccion;