import React, { useState } from 'react';
import './../../Style/Secciones/CuestionarioCSS.css';
import { Link } from 'react-router-dom';

const PREGUNTAS = [
    {
        id: 1,
        enunciado: "Entras en un jardín encantado. ¿Qué es lo primero que te llama la atención?",
        opciones: [
            { texto: "El árbol de hojas doradas con manzanas de plata (Valor)", casa: "gryffindor" },
            { texto: "Las setas rojas que parecen susurrar entre sí (Curiosidad)", casa: "ravenclaw" },
            { texto: "El estanque de agua cristalina y burbujeante (Armonía)", casa: "hufflepuff" },
            { texto: "La estatua de piedra que te vigila fijamente (Poder)", casa: "slytherin" }
        ]
    },
    {
        id: 2,
        enunciado: "Si pudieras crear una poción mágica, ¿qué te otorgaría?",
        opciones: [
            { texto: "Gloria y coraje imperecedero", casa: "gryffindor" },
            { texto: "Sabiduría infinita sobre los misterios del mundo", casa: "ravenclaw" },
            { texto: "Paz mental y el bienestar de tus seres queridos", casa: "hufflepuff" },
            { texto: "El poder de controlar tu propio destino y el de otros", casa: "slytherin" }
        ]
    },
    {
        id: 3,
        enunciado: "Un compañero de clase hace trampas en un examen usando una pluma auto-escribiente. ¿Qué haces?",
        opciones: [
            { texto: "Le plantas cara directamente al terminar la clase", casa: "gryffindor" },
            { texto: "Analizas el encantamiento de la pluma para ver cómo funciona", casa: "ravenclaw" },
            { texto: "Le pides amablemente que pare porque no es justo para el resto", casa: "hufflepuff" },
            { texto: "Aprovechas la situación para pedirle un favor a cambio de tu silencio", casa: "slytherin" }
        ]
    },
    {
        id: 4,
        enunciado: "¿Cuál es tu mayor temor?",
        opciones: [
            { texto: "Ser cobarde o no defender a los indefensos", casa: "gryffindor" },
            { texto: "El fracaso intelectual o la ignorancia", casa: "ravenclaw" },
            { texto: "La soledad, el rechazo o que olviden tus buenas acciones", casa: "hufflepuff" },
            { texto: "La mediocridad o perder el control sobre tus metas", casa: "slytherin" }
        ]
    },
    {
        id: 5,
        enunciado: "Te encuentras en un callejón oscuro y un mago tenebroso te bloquea el paso. ¿Cuál es tu primera reacción?",
        opciones: [
            { texto: "Sacas tu varita de inmediato y te preparas para batirte en duelo", casa: "gryffindor" },
            { texto: "Buscas rápidamente una salida alternativa o una debilidad en su postura", casa: "ravenclaw" },
            { texto: "Intentas dialogar o calmar la situación para evitar la violencia", casa: "hufflepuff" },
            { texto: "Lanzas un hechizo cegador por sorpresa y aseguras tu ventaja", casa: "slytherin" }
        ]
    },
    {
        id: 6,
        enunciado: "¿Qué tipo de instrumento mágico te resultaría más útil poseer?",
        opciones: [
            { texto: "Una espada antigua que absorbe el poder de lo que derrota", casa: "gryffindor" },
            { texto: "Un giratiempo para poder estudiar y aprender el doble cada día", casa: "ravenclaw" },
            { texto: "Un amuleto que detecta venenos y protege la salud de tu grupo", casa: "hufflepuff" },
            { texto: "La Capa de Invisibilidad para moverte sin restricciones ni leyes", casa: "slytherin" }
        ]
    },
    {
        id: 7,
        enunciado: "Vas caminando por el bosque y te encuentras con un huevo de criatura mágica a punto de romperse. ¿Qué haces?",
        opciones: [
            { texto: "Lo proteges con tu cuerpo de posibles depredadores cercanos", casa: "gryffindor" },
            { texto: "Sacas un cuaderno para registrar el nacimiento y descifrar la especie", casa: "ravenclaw" },
            { texto: "Lo cuidas con delicadeza y buscas a su madre por los alrededores", casa: "hufflepuff" },
            { texto: "Te lo guardas; una criatura leal desde el nacimiento es un recurso valioso", casa: "slytherin" }
        ]
    },
    {
        id: 8,
        enunciado: "Llegas a una encrucijada en tu camino hacia Hogwarts. ¿Qué sendero eliges?",
        opciones: [
            { texto: "El camino iluminado por antorchas que sube directo hacia la montaña", casa: "gryffindor" },
            { texto: "El sendero adoquinado que pasa por una antigua biblioteca en ruinas", casa: "ravenclaw" },
            { texto: "El camino llano, rodeado de campos florecientes y cabañas acogedoras", casa: "hufflepuff" },
            { texto: "El atajo estrecho y sombrío que promete llegar en la mitad de tiempo", casa: "slytherin" }
        ]
    },
    {
        id: 9,
        enunciado: "Al final de tu vida, ¿cómo te gustaría ser recordado por la historia?",
        opciones: [
            { texto: "Como un héroe legendario cuyas hazañas inspiren a las generaciones", casa: "gryffindor" },
            { texto: "Como un sabio o erudito que expandió el conocimiento mágico", casa: "ravenclaw" },
            { texto: "Como un amigo fiel y una persona de gran corazón que ayudó a todos", casa: "hufflepuff" },
            { texto: "Como un líder formidable cuyo nombre imponía respeto y autoridad", casa: "slytherin" }
        ]
    },
    {
        id: 10,
        enunciado: "¿Qué mascota oficial de Hogwarts te llevarías contigo en el Expreso?",
        opciones: [
            { texto: "Un búho audaz que no le teme a las tormentas", casa: "gryffindor" },
            { texto: "Un mochuelo pequeño de mirada analítica e inteligente", casa: "ravenclaw" },
            { texto: "Un sapo tranquilo que te acompaña fielmente en el bolsillo", casa: "hufflepuff" },
            { texto: "Un gato de bengala astuto que sabe moverse por las sombras", casa: "slytherin" }
        ]
    }
];

const PaginaCuestionario = ({ onTestCompletado }) => {
    const [preguntaActualIdx, setPreguntaActualIdx] = useState(0);
    const [puntuacion, setPuntuacion] = useState({
        gryffindor: 0,
        slytherin: 0,
        ravenclaw: 0,
        hufflepuff: 0
    });
    const [casaGanadora, setCasaGanadora] = useState(null);

    const manejarRespuesta = (casaAsociada) => {
        // Sumamos un punto a la casa seleccionada
        const nuevasPuntuaciones = {
            ...puntuacion,
            [casaAsociada]: puntuacion[casaAsociada] + 1
        };
        setPuntuacion(nuevasPuntuaciones);

        // Si quedan preguntas, avanzamos
        if (preguntaActualIdx < PREGUNTAS.length - 1) {
            setPreguntaActualIdx(preguntaActualIdx + 1);
        } else {
            // Si es la última pregunta, calculamos el veredicto del sombrero
            calcularCasaGanadora(nuevasPuntuaciones);
        }
    };

    const calcularCasaGanadora = (puntosFinales) => {
        // Buscamos la casa con la puntuación más alta
        let maxPuntos = -1;
        let casaElegida = 'hufflepuff'; // Por defecto si hay empates absolutos

        Object.keys(puntosFinales).forEach((casa) => {
            if (puntosFinales[casa] > maxPuntos) {
                maxPuntos = puntosFinales[casa];
                casaElegida = casa;
            }
        });

        // Formateamos el nombre de la casa estéticamente
        const casaFormateada = casaElegida.charAt(0).toUpperCase() + casaElegida.slice(1);
        setCasaGanadora(casaFormateada);

        // 🔥 CRUCIAL: Actualizamos los datos del usuario en el localStorage
        // Para que se sincronice en tiempo real con el Navbar con sesión sin tumbar la app
        const usuarioString = localStorage.getItem('usuario');
        if (usuarioString) {
            const usuarioObj = JSON.parse(usuarioString);
            usuarioObj.casa = casaFormateada; // Le añadimos la casa calculada
            localStorage.setItem('usuario', JSON.stringify(usuarioObj));
        }
    };

    const preguntaActual = PREGUNTAS[preguntaActualIdx];

    return (
        <div className="juego-wrapper">
            <div className="juego-box sobre-hogwarts-sombrero">
                <h2 className="juego-titulo">🧙‍♂️ EL SOMBRERO SELECCIONADOR 🧙‍♂️</h2>

                {!casaGanadora ? (
                    <div className="contenedor-test">
                        {/* Indicador de progreso */}
                        <div className="progreso-test">
                            Runa {preguntaActualIdx + 1} de {PREGUNTAS.length}
                        </div>

                        {/* Enunciado */}
                        <div className="enunciado-pregunta">
                            <p>{preguntaActual.enunciado}</p>
                        </div>

                        {/* Opciones de respuesta */}
                        <div className="lista-opciones">
                            {preguntaActual.opciones.map((opcion, index) => (
                                <button 
                                    key={index} 
                                    className="btn-opcion-magica"
                                    onClick={() => manejarRespuesta(opcion.casa)}
                                >
                                    {opcion.texto}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Pantalla de Veredicto Final */
                    <div className="resultado-seleccion">
                        <div className={`escudo-casa-animado ${casaGanadora.toLowerCase()}`}>
                            {casaGanadora === 'Gryffindor' && '🦁'}
                            {casaGanadora === 'Slytherin' && '🐍'}
                            {casaGanadora === 'Ravenclaw' && '🦅'}
                            {casaGanadora === 'Hufflepuff' && '🦡'}
                        </div>
                        <h3 className="titulo-casa-ganadora">¡PERTENECES A... {casaGanadora.toUpperCase()}!</h3>
                        <p className="descripcion-casa">
                            El sombrero ha analizado tu mente. Tus decisiones demuestran que posees las cualidades idóneas para honrar los estandartes de esta legendaria casa.
                        </p>
                        <Link to={'/home'}>
                        <button  className="btn-jugar-magico" > Entrar a la Sala Común </button>
                        </Link>
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaginaCuestionario;