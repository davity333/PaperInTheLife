import React from 'react'
import AtomoTxtAmigos from '../Atomos/Textos/AtomoTxtAmigos'
import linea from '../imagenes/linea.png';

import style from './imagenes.module.css';
import amigoslist from '../../data/amigoslist';
import amigoslistdos from '../../data/amigoslistdos';

import acdc from '../imagenes/acdc.png';
import marcelo from '../imagenes/marcelo.png';
import paper from '../imagenes/paper.jpg';

function Amigos(){

    return(
        <>
        <AtomoTxtAmigos friends={"AMIGOS"}></AtomoTxtAmigos>
        <img id={style.lineatwo} src={linea}></img>

        <div id={style.friends}>
        {amigoslist.friends.map(product => (
            <img key={product.image} src={product.image} alt="" />
        ))}
        </div>

        <div id={style.friendsdos}>
        {amigoslistdos.friends.map(product => (
            <img key={product.image} src={product.image} alt="" />
        ))}
        </div>

        <img id={style.acdc} src={acdc} />
        <img id={style.marcelo} src={marcelo} />
        <img id={style.paper} src={paper} />

        </>

    );

}

export default Amigos;