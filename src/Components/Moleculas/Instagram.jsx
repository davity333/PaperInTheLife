import React from "react";
import ig from '../imagenes/ig.png';
import style from './imagenes.module.css';

function Instagram(){
    return (
        <a href="https://www.instagram.com/paper_in_the_life/" target="_blank" rel="noopener noreferrer">
            <div id={style.rectangulo}>
                <img src={ig} id={style.ig} alt="Instagram" />
                <p id={style.davity}>@paper_in_the_life</p>
            </div>
        </a>
    );
}

export default Instagram;