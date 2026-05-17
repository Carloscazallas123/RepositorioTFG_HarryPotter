import React, { useState, useEffect, useRef } from 'react';
import './../../../Style/Secciones/juegos/DueloMagosCSS.css';
import MinijuegoService from '../../../Services/ServicioMinijuegos';
import { alertaExito } from '../../../Utils/Alertas';
import { Link } from 'react-router-dom';
// Banco de palabras mágicas para el duelo
const PALABRAS_MAGICAS = [
    "Expelliarmus", "Flipendo", "Alohomora", "Lumos", "Incendio", 
    "Riddikulus", "Crucio", "Accio", "Aguamenti", "Sectumsempra", 
    "Expecto Patronum", "Avada Kedavra", "Protego", "Stupefy"
];

const TIEMPO_LIMITE_SEGUNDOS = 5; // Tiempo que tienes para escribir la palabra antes de que Draco ataque

const DueloMagos = ({ onVolver }) => {
    const [vidaHarry, setVidaHarry] = useState(100);
    const [vidaDraco, setVidaDraco] = useState(100);
    const [palabraActual, setPalabraActual] = useState('');
    const [inputUsuario, setInputUsuario] = useState('');
    const [tiempoRestante, setTiempoRestante] = useState(TIEMPO_LIMITE_SEGUNDOS);
    const [juegoEstado, setJuegoEstado] = useState('inicio'); // 'inicio', 'jugando', 'ganado', 'perdido'
    const [mensajeFeedback, setMensajeFeedback] = useState('¡Prepara tus dedos!');
    const [puntaje, setPuntaje] = useState(100);

    // Timers en Refs para evitar desfases con los re-renders
    const timerRef = useRef(null);
    const estadoRef = useRef('inicio');

    useEffect(() => {
        estadoRef.current = juegoEstado;
    }, [juegoEstado]);

    // Seleccionar una palabra aleatoria asegurando que no se repita inmediatamente la misma
    const obtenerPalabraAleatoria = () => {
        let nuevaPalabra = PALABRAS_MAGICAS[Math.floor(Math.random() * PALABRAS_MAGICAS.length)];
        setPalabraActual(nuevaPalabra);
        setInputUsuario('');
        setTiempoRestante(TIEMPO_LIMITE_SEGUNDOS);
    };

    const iniciarDuelo = () => {
        setVidaHarry(100);
        setVidaDraco(100);
        setJuegoEstado('jugando');
        setMensajeFeedback('¡Escribe rápido y pulsa Enter!');
        obtenerPalabraAleatoria();
    };

    // Bucle del reloj de Draco
    useEffect(() => {
        if (juegoEstado === 'jugando') {
            timerRef.current = setInterval(() => {
                setTiempoRestante((prev) => {
                    if (prev <= 1) {
                        // El tiempo llegó a 0: Draco te ataca
                        dracoAtaca();
                        return TIEMPO_LIMITE_SEGUNDOS;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [juegoEstado, palabraActual]);

    const dracoAtaca = () => {
        setMensajeFeedback('¡Demasiado lento! Draco te ha lanzado un maleficio 💥');
        setPuntaje(puntaje - 20);
        setVidaHarry((prev) => {
            const nuevaVida = Math.max(0, prev - 25);
            if (nuevaVida <= 0){
            setJuegoEstado('perdido');
            PartidaTerminada(puntaje);
            }
            return nuevaVida;
        });
        if (estadoRef.current === 'jugando') obtenerPalabraAleatoria();
    };

    // Procesar el intento al pulsar Enter
    const handleSubmit = (e) => {
        e.preventDefault();
        if (juegoEstado !== 'jugando') return;

        // Comparamos ignorando espacios extra al principio o al final
        if (inputUsuario.trim() === palabraActual) {
            setMensajeFeedback('¡Hechizo lanzado con éxito! ⚡');
            setPuntaje(puntaje + 100);
            console.log(puntaje);
            setVidaDraco((prev) => {
                const nuevaVida = Math.max(0, prev - 25);
                if (nuevaVida <= 0) {
                    setJuegoEstado('ganado');
                    PartidaTerminada(puntaje);
                }
                return nuevaVida;
            });
            obtenerPalabraAleatoria();
        } else {
            setMensajeFeedback('¡Te has trabado al pronunciarlo! Inténtalo de nuevo ❌');
        }
    };

    //Metodo para cuando terminas la partida
    const PartidaTerminada = async (puntaje) => {
        const usuarioactualizado= await MinijuegoService.getUsuarioActualizado(puntaje);
        localStorage.setItem('usuario',JSON.stringify(usuarioactualizado));
    }

    return (
        <div className="juego-wrapper">
            <div className="juego-box sobre-hogwarts-duelo">
                <h2 className="juego-titulo">⌨️ DUELO DE MECANOGRAFÍA 🪄</h2>
                
                <Link to={'/minijuegos'}>
                    <button className="btn-volver"> ← Huir de la Batalla </button>
                </Link>
                
                {/* HUD de vida estilo juego de lucha */}
                <div className="duelo-marcador-vida">
                    <div className="mago-status">
                        <span className="mago-nombre">Harry Potter (Tú)</span>
                        <div className="barra-vida-contenedor">
                            <div className="barra-vida harry" style={{ width: `${vidaHarry}%` }}></div>
                        </div>
                        <span className="vida-texto">{vidaHarry}/100 HP</span>
                    </div>

                    <div className="mago-status">
                        <span className="mago-nombre">Draco Malfoy</span>
                        <div className="barra-vida-contenedor">
                            <div className="barra-vida draco" style={{ width: `${vidaDraco}%` }}></div>
                        </div>
                        <span className="vida-texto">{vidaDraco}/100 HP</span>
                    </div>
                </div>

                <div className="feedback-hechizo">
                    <p>{mensajeFeedback}</p>
                </div>

                <div className="campo-batalla">
                    {juegoEstado === 'inicio' && (
                        <div className="juego-start-pantalla">
                            <p>Escribe la palabra mágica exactamente como aparece en pantalla (respetando mayúsculas y espacios) y pulsa <strong>Enter</strong> para atacar. ¡Si tardas más de {TIEMPO_LIMITE_SEGUNDOS} segundos, Draco te atacará a ti!</p>
                            <button className="btn-jugar-magico" onClick={iniciarDuelo}>
                                Comenzar Duelo
                            </button>
                        </div>
                    )}

                    {juegoEstado === 'jugando' && (
                        <div className="arena-mecanografia">
                            {/* Barra de tiempo/progreso para el ataque de Draco */}
                            <div className="reloj-draco-contenedor">
                                <div 
                                    className={`reloj-draco-barra ${tiempoRestante <= 2 ? 'critico' : ''}`} 
                                    style={{ width: `${(tiempoRestante / TIEMPO_LIMITE_SEGUNDOS) * 100}%` }}
                                ></div>
                            </div>
                            <span className="reloj-texto">¡Draco atacará en: {tiempoRestante}s!</span>

                            {/* Palabra a escribir */}
                            <div className="caja-palabra-magica">
                                <span className="palabra-objetivo">{palabraActual}</span>
                            </div>

                            {/* Formulario de entrada */}
                            <form onSubmit={handleSubmit} className="formulario-hechizo">
                                <input 
                                    type="text" 
                                    className="input-hechizo"
                                    value={inputUsuario}
                                    onChange={(e) => setInputUsuario(e.target.value)}
                                    placeholder="Escribe el conjuro aquí..."
                                    autoFocus
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                                <button type="submit" className="btn-lanzar-conjuro">¡Conjurar!</button>
                            </form>
                        </div>
                    )}

                    {juegoEstado === 'ganado' && (
                        <div className="juego-start-pantalla">
                            <h3 className="esmeralda">¡VICTORIA EN EL DUELO! 🏆</h3>
                            <p>Tus dedos han sido más rápidos que la varita de Draco. Lo has derrotado limpiamente.</p>
                            <button className="btn-jugar-magico" onClick={iniciarDuelo}>Batirse de nuevo</button>
                        </div>
                    )}

                    {juegoEstado === 'perdido' && (
                        <div className="juego-start-pantalla">
                            <h3 className="texto-alerta">¡HAS SIDO DERROTADO! ❌</h3>
                            <p>Te has enredado con el teclado y Draco te ha dejado fuera de combate.</p>
                            <button className="btn-jugar-magico" onClick={iniciarDuelo}>Reintentar Duelo</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DueloMagos;