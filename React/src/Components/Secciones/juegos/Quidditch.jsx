import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './../../../Style/Secciones/juegos/QuidditchCSS.css'; 
import MinijuegoService from '../../../Services/ServicioMinijuegos';
import { alertaExito } from '../../../Utils/Alertas';

const Quidditch = ({ onVolver }) => {
    // Estados del juego
    const [atrapadas, setAtrapadas] = useState(0);
    const [errores, setErrores] = useState(0);
    const [tiempoRestante, setTiempoRestante] = useState(30); 
    const [juegoEstado, setJuegoEstado] = useState('inicio'); // 'inicio', 'jugando', 'ganado', 'perdido'
    const [posicion, setPosicion] = useState({ top: '50%', left: '50%' });
    const [velocidadSnitch, setVelocidadSnitch] = useState(1400); // Dificultad Media: 1.4 segundos iniciales
    const [puntaje, setPuntaje] = useState(0);

    const snitchTimerRef = useRef(null);
    const juegoTimerRef = useRef(null);

    const moverSnitch = () => {
        // Manda al Snitch a una ubicacion aleatoria
        const randomTop = Math.floor(Math.random() * 75) + 10; 
        const randomLeft = Math.floor(Math.random() * 75) + 10;
        setPosicion({ top: `${randomTop}%`, left: `${randomLeft}%` });
    };

    useEffect(() => {
        if (juegoEstado === 'jugando') {
            // Temporizador del partido (1 segundo por tic)
            juegoTimerRef.current = setInterval(() => {
                setTiempoRestante((prev) => {
                    if (prev <= 1) {
                        setJuegoEstado('perdido');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            // Temporizador del movimiento autónomo de la Snitch
            snitchTimerRef.current = setInterval(() => {
                moverSnitch();
            }, velocidadSnitch);
        }

        return () => {
            clearInterval(juegoTimerRef.current);
            clearInterval(snitchTimerRef.current);
        };
    }, [juegoEstado, velocidadSnitch]);

    useEffect(() => {
        if (juegoEstado === 'jugando') {
            clearInterval(snitchTimerRef.current);
            snitchTimerRef.current = setInterval(() => {
                moverSnitch();
            }, velocidadSnitch);
        }
        return () => clearInterval(snitchTimerRef.current);
    }, [velocidadSnitch, juegoEstado]);

    //Iniciar la Partida
    const iniciarPartido = () => {
        setAtrapadas(0);
        setErrores(0);
        setTiempoRestante(30);
        setVelocidadSnitch(1400); // Reset al valor intermedio
        setJuegoEstado('jugando');
        moverSnitch();
    };

    //Cuando la Atrapa
    const handleAtraparSnitch = (e) => {
        e.stopPropagation(); 
        if (juegoEstado !== 'jugando') return;
        const nuevasAtrapadas = atrapadas + 1;
        setAtrapadas(nuevasAtrapadas);
        const Puntaje = puntaje + 50;
        setPuntaje(Puntaje);
        if (nuevasAtrapadas >= 10) {
            setJuegoEstado('ganado');
            PartidaTerminada(puntaje);
        } else {
            // Aceleración media (-85ms) con un tope justo pero retador (600ms)
            setVelocidadSnitch((prevVel) => Math.max(600, prevVel - 85)); 
            moverSnitch();
        }
    };

    const handleErrorClic = () => {
        if (juegoEstado !== 'jugando') return;

        const nuevosErrores = errores + 1;
        setErrores(nuevosErrores);
        setPuntaje(puntaje - 10);
        if (nuevosErrores >= 5) {
            setJuegoEstado('perdido');
            PartidaTerminada(puntaje);
        }
    };
    //Metodo para cuando terminas la partida
    const PartidaTerminada = async (puntaje) => {
        const usuarioactualizado= await MinijuegoService.getUsuarioActualizado(puntaje);
        localStorage.setItem('usuario',JSON.stringify(usuarioactualizado));
    }

    return (
        <div className="juego-wrapper">
            <div className="juego-box">
                <Link to={'/minijuegos'}>
                <button className="btn-volver">← Volver a la Sala</button>
                </Link>

                <h2 className="juego-titulo">⚡ PARTIDO DE QUIDDITCH ⚡</h2>
                <div className="snitch-marcador">
                    <span>Tiempo: <strong className={tiempoRestante < 10 ? "texto-alerta" : ""}>{tiempoRestante}s</strong></span>
                    <span>Atrapadas: <strong className="dorado">{atrapadas} / 10</strong></span>
                    <span>Errores: <strong className={errores >= 4 ? "texto-alerta" : ""}>{errores} / 5</strong></span>
                </div>

                <div className="campo-vuelo" onClick={handleErrorClic}>
                    
                    {juegoEstado === 'inicio' && (
                        <div className="juego-start-pantalla">
                            <button className="btn-jugar-magico" onClick={iniciarPartido}>Iniciar Vuelo</button>
                        </div>
                    )}

                    {juegoEstado === 'jugando' && (
                        <div 
                            className="snitch-dorada animate-snitch" 
                            style={{ top: posicion.top, left: posicion.left }}
                            onClick={handleAtraparSnitch}
                        >
                            🟡💨
                        </div>
                    )}

                    {juegoEstado === 'ganado' && (
                        <div className="juego-start-pantalla">
                            <h3 className="dorado">¡VICTORIA EN EL PARTIDO! 🏆</h3>
                            <p>¡Excelente reflejos de Buscador! Has asegurado la victoria atrapando la Snitch.</p>
                            <button className="btn-jugar-magico" onClick={iniciarPartido}>Jugar otra vez</button>
                        </div>
                    )}

                    {juegoEstado === 'perdido' && (
                        <div className="juego-start-pantalla">
                            <h3 className="texto-alerta">¡PARTIDO FINALIZADO! ❌</h3>
                            <p>{errores >= 5 ? "La Snitch esquivó tus amagos. Demasiados errores." : "El tiempo reglamentario de vuelo ha terminado."}</p>
                            <button className="btn-jugar-magico" onClick={iniciarPartido}>Reintentar</button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Quidditch;