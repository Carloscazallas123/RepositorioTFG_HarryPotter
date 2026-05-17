import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../Style/Secciones/MinijuegosCSS.css';

const Minijuegos = () => {
    return (
    <div className="minijuegos-container">

        <div className="juegos-grid">
            
            {/* MINIJUEGO 1: QUIDDITCH */}
            <div className="juego-card" onClick={() => setJuegoActivo('quidditch')}>
                <div className="juego-icono-wrapper">
                    <span className="juego-icono">✨</span>
                </div>
                <div className="juego-info">
                    
                    <h3>Quidditch</h3>
                    <p>
                        Una Snitch dorada aparecerá en tu pantalla. Con cada vez que la atrapes, se moverá más y más rápido. 
                        Tu objetivo será atraparla 10 veces antes de que se acabe el tiempo. Pero cuidado, solo podrás 
                        cometer 5 errores, porque de lo contrario, perderás el juego.
                    </p>
                </div>
                <Link to={'/quidditch'}>
                <button className="btn-jugar-magico">Cazar Snitch</button>
                </Link>
            </div>

            {/* MINIJUEGO 2: CARRERA DE ESCOBAS */}
            <div className="juego-card" onClick={() => setJuegoActivo('carrera')}>
                <div className="juego-icono-wrapper">
                    <span className="juego-icono">🧹</span>
                </div>
                <div className="juego-info">
                    <h3>Cartas Magicas</h3>
                    <p>
                        Dumbledore te da 12 cartas magicas de Hogwarts. Tu propósito sera encontrar las parejas 
                        bajo un cierto numero de intentos. Si, por el contrario, no has completado el desafio y 
                        se te han acabado los intentos, el juego termina. ¡ No decepciones a Dumbledore !

                    </p>
                </div>
                <Link to={'/memoria'}>
                    <button className="btn-jugar-magico">Despegar</button>
                </Link>
                
            </div>

            {/* MINIJUEGO 3: DUELO DE MAGOS */}
            <div className="juego-card" onClick={() => setJuegoActivo('duelo')}>
                <div className="juego-icono-wrapper">
                    <span className="juego-icono">🪄</span>
                </div>
                <div className="juego-info">
                    <h3>Duelo de Magos</h3>
                    <p>
                        Enfréntate en un duelo de magos contra Draco Malfoy. Para atacar, deberás usas tus 
                        magicas habilidades de mecanografia para enfrentarlo. Si fallas, Draco te atacará y perderás vida. 
                        Si aciertas, le atacarás. ¡ Que gane el mejor !
                    </p>
                </div>
                <Link to={'/duelo'}>
                <button className="btn-jugar-magico">Batirse en Duelo</button>
                </Link>
                
            </div>

        </div>
    </div>
);
}

export default Minijuegos;