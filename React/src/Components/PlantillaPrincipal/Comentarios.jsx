import React, { useState, useEffect } from 'react';
import { getComentarios } from '../../Services/ServicioComentarios';
import './../../Style/SinIniciarSesion/ComentariosCSS.css';

const Reseñas = () => {
    const [listaComentarios, setListaComentarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const cargarDatos = async () => {
            const datos = await getComentarios();
            setListaComentarios(datos);
            setCargando(false);
        };
        console.log( "Despues: " + listaComentarios);
        cargarDatos();
    }, []);

    // Función para pintar las estrellas doradas
    const renderStars = (valor) => '★'.repeat(valor) + '☆'.repeat(5 - valor);

    return (
        <section className="reseñasSection">
            <h2 className="reseñasTitle">Reseñas de la Comunidad</h2>
            
            <div className="reseñasGrid">
                {cargando ? (
                    <p className="loadingText">Lanzando hechizos de búsqueda...</p>
                ) : listaComentarios.length > 0 ? (
                    listaComentarios.map((com) => (
                        <div key={com} className="reseñaCard">
                            <div className="reseñaHeader">
                                <img 
                                src={`https://ui-avatars.com/api/?name=${com.usuario?.nombre || 'Mago'}&background=7d6b4a&color=fff&bold=true`} 
                                alt="UserIcon" className="userIcon" />
                                <div className="userInfo">
                                    {/* Muestra el nombre del usuario relacionado en la DB */}
                                    <h4>{com.usuario || 'Mago Misterioso'}</h4>
                                    <div className="metaData">
                                        <span className="stars">{renderStars(com.valor)}</span>
                                        <span className="fecha">{com.fecha}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reseñaBody">
                                <p>"{com.descripcion}"</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="loadingText">No hay búhos con mensajes todavía.</p>
                )}
            </div>

            <div className="buttonContainer">
                <button className="btnComentar">Añadir Comentario</button>
            </div>
        </section>
    );
};

export default Reseñas;