import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import PersonajeService from './../../Services/ServicioPersonajes';
import './../../Style/Navbars/PersonajesDetallesCSS.css';

const PersonajeDetalle= () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pj, setPj] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                // Pasamos el ID que viene de la URL al servicio
                const data = await PersonajeService.getDetallePersonaje(id);
                setPj(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        if (id) obtenerDatos();
    }, []);

    if (loading) return <div className="magic-loader">Consultando los archivos del Ministerio...</div>;
    if (!pj) return <div>Personaje no encontrado.</div>;

    return (
        <div className="detalle-page-container">
            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Volver al Gran Comedor
            </button>
            
            <div className={`detalle-view ${pj.casa?.toLowerCase()}`}>
                <header className="view-header">
                    <h1>{pj.nombre}</h1>
                    <span className="casa-tag">{pj.casa || 'Desconocido'}</span>
                </header>

                <div className="view-content">
                    <p className="bio-text">{pj.Descripcion}</p>
                    
                    <div className="inventory-section">
                        <h3>Inventario Personal</h3>
                        <div className="items-list">
                            {pj.objetos.map((item, index) => (
                                <span key={index} className="item-badge">📜 {item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonajeDetalle;