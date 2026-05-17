import React, { useState, useEffect } from 'react';
import './../../../Style/Secciones/juegos/MemoriaCSS.css';
import { alertaExito } from '../../../Utils/Alertas';
import MinijuegoService from '../../../Services/ServicioMinijuegos';
import { Link } from 'react-router-dom';
const PERSONAJES_BASE = [
    { name: 'Harry Potter', emoji: '⚡' },
    { name: 'Hermione Granger', emoji: '📚' },
    { name: 'Ron Weasley', emoji: '🍗' },
    { name: 'Albus Dumbledore', emoji: '🧙‍♂️' },
    { name: 'Severus Snape', emoji: '🧪' },
    { name: 'Draco Malfoy', emoji: '🍏' }
];

const MOVIMIENTOS_MAXIMOS = 1000; // Aquí puedes cambiar el límite de intentos

const MinijuegoMemoria = ({ onVolver }) => {
    const [puntaje, setPuntaje] = useState(100);
    const [cartas, setCartas] = useState([]);
    const [seleccionadas, setSeleccionadas] = useState([]);
    const [emparejadas, setEmparejadas] = useState([]);
    const [movimientos, setMovimientos] = useState(0);
    const [juegoEstado, setJuegoEstado] = useState('jugando'); // 'jugando', 'ganado', 'perdido'
    const inicializarJuego = () => {
        const cartasDuplicadas = [...PERSONAJES_BASE, ...PERSONAJES_BASE].map((personaje, index) => ({
            ...personaje,
            idUnique: index
        }));

        const cartasBarajadas = cartasDuplicadas.sort(() => Math.random() - 0.5);

        setCartas(cartasBarajadas);
        setSeleccionadas([]);
        setEmparejadas([]);
        setMovimientos(0);
        setJuegoEstado('jugando');
    };

    useEffect(() => {
        inicializarJuego();
    }, []);

    const handleCartaClick = (carta) => {
        if (juegoEstado !== 'jugando') return;
        if (seleccionadas.length === 2) return;
        if (seleccionadas.some(s => s.idUnique === carta.idUnique)) return;
        if (emparejadas.includes(carta.name)) return;
    
        const nuevasSeleccionadas = [...seleccionadas, carta];
        setSeleccionadas(nuevasSeleccionadas);

        if (nuevasSeleccionadas.length === 2) {
            const elSiguienteMovimiento = movimientos + 1;
            setMovimientos(elSiguienteMovimiento);
            
            const [primera, segunda] = nuevasSeleccionadas;

            if (primera.name === segunda.name) {
                const nuevasEmparejadas = [...emparejadas, primera.name];
                setEmparejadas(nuevasEmparejadas);
                setSeleccionadas([]);
                if(puntaje<=0) setPuntaje(0);
                setPuntaje(puntaje + 500);
                console.log('+500 puntos');
                // Verificar si ganó
                if (nuevasEmparejadas.length === PERSONAJES_BASE.length) {
                    setJuegoEstado('ganado');
                    PartidaTerminada(puntaje);
                    setPuntaje(0);
                }
            } else {
                // No coinciden: voltear de vuelta tras 1 segundo
                if(puntaje==0){
                    setPuntaje(0); 
                    console.log('0 puntos');
                }
                setPuntaje(puntaje-100);
                console.log('Menos 100 puntos');
                setTimeout(() => {
                    setSeleccionadas([]);
                    
                    // Si no hubo match y ya alcanzó el límite de movimientos, pierde
                    if (elSiguienteMovimiento >= MOVIMIENTOS_MAXIMOS && nuevasEmparejadas.length < PERSONAJES_BASE.length) {
                        setJuegoEstado('perdido');
                        PartidaTerminada(puntaje);
                    }
                }, 1000);
            }
        }
    };

    //Metodo para cuando terminas la partida
    const PartidaTerminada = async (puntaje) => {
        const usuarioactualizado= await MinijuegoService.getUsuarioActualizado(puntaje);
        localStorage.setItem('usuario',JSON.stringify(usuarioactualizado));
    }

    // Calculamos cuántos movimientos le quedan al mago
    const movimientosRestantes = MOVIMIENTOS_MAXIMOS - movimientos;

    return (
        <div className="juego-wrapper">
            <div className="juego-box sobre-hogwarts-memoria">
                <h2 className="juego-titulo">🧠 MEMORIA DE MAGOS 🧠</h2>
                
                <Link to={'/minijuegos'}>
                    <button className="btn-volver"> ← Huir de la Batalla </button>
                </Link>

                <div className="snitch-marcador">
                    <span>Movimientos restantes: <strong className={movimientosRestantes <= 3 ? "texto-alerta" : "esmeralda"}>{movimientosRestantes}</strong></span>
                    <span>Parejas: <strong className="esmeralda">{emparejadas.length} / {PERSONAJES_BASE.length}</strong></span>
                </div>

                {juegoEstado === 'ganado' && (
                    <div className="pantalla-resultado-memoria">
                        <h3 className="esmeraldaT">¡MÁXIMA CONCENTRACIÓN! 🏆</h3>
                        <p>Has recordado la ubicación de todos los miembros de Hogwarts usando solo {movimientos} movimientos.</p>
                        <button className="btn-jugar-magico" onClick={inicializarJuego}>Jugar otra vez</button>
                    </div>
                )}

                {juegoEstado === 'perdido' && (
                    <div className="pantalla-resultado-memoria">
                        <h3 className="texto-alerta">¡TE HAS QUEDADO SIN ENERGÍA MÁGICA! ❌</h3>
                        <p>Has agotado los {MOVIMIENTOS_MAXIMOS} movimientos permitidos antes de resolver el tablero.</p>
                        <button className="btn-jugar-magico" onClick={inicializarJuego}>Reintentar</button>
                    </div>
                )}

                {juegoEstado === 'jugando' && (
                    <div className="tablero-memoria">
                        {cartas.map((carta) => {
                            const estaVolteada = seleccionadas.some(s => s.idUnique === carta.idUnique) || emparejadas.includes(carta.name);

                            return (
                                <div 
                                    key={carta.idUnique} 
                                    className={`carta-slot ${estaVolteada ? 'volteada' : ''}`}
                                    onClick={() => handleCartaClick(carta)}
                                >
                                    <div className="carta-interna">
                                        <div className="carta-reverso">
                                            <div className="sello-lacre-mini">✉️</div>
                                        </div>
                                        <div className="carta-anverso">
                                            <span className="personaje-emoji">{carta.emoji}</span>
                                            <p className="personaje-nombre">{carta.name}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MinijuegoMemoria;