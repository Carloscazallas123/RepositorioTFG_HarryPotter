import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Importante para la navegación
import PersonajeService from './../../Services/ServicioPersonajes';
import './../../Style/Navbars/PersonajesCSS.css';

const PersonajesList = () => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate(); // Hook para redirigir

    useEffect(() => {
        const fetchPersonajes = async () => {
            try {
                const data = await PersonajeService.getListaPersonajes();
                setPersonajes(data);
                setLoading(false);
            } catch (err) {
                setError(err.message || "Error al convocar a los personajes");
                setLoading(false);
            }
        };

        fetchPersonajes();
    }, []);

    if (loading) return <div className="magic-loader">Consultando el Mapa del Merodeador...</div>;
    if (error) return <div className="magic-error">⚠️ {error}</div>;

    return (
        <div className="personajes-container">
            <header className="personajes-header">
                <h2>Habitantes de Hogwarts</h2>
                <span className="count-badge">{personajes.length} Almas</span>
            </header>

            <div className="personajes-grid">
                {personajes.length > 0 ? (
                    personajes.map((pjs) => (
                        <div 
                            key={pjs.id} 
                            className={`personaje-card ${pjs.casa.toLowerCase()}`}
                            onClick={(
                            ) => navigate(`/detalles/${pjs.id}`)}>
                            <div className="card-inner">
                                <div className="pj-avatar">👤</div>
                                <div className="pj-info">
                                    <h3 className="pj-nombre">{pjs.nombre}</h3>
                                    <div className="pj-casa-tag">
                                        <i className="fa-solid fa-shield-halved"></i>
                                        <span>{pjs.casa}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty-msg">No hay personajes registrados en el gran comedor.</p>
                )}
            </div>
        </div>
    );
};

export default PersonajesList;