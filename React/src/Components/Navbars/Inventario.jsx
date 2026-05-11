import React, { useEffect, useState } from 'react';
import ObjetoService from './../../Services/ServicioObjetos';
import './../../Style/Navbars/InventarioCSS.css';

const InventarioObjetos = () => {
    // Cambiamos el nombre a 'objetos' porque ahora guardaremos objetos completos, no solo IDs
    const [objetos, setObjetos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInventario = async () => {
            try {
                const lista = await ObjetoService.getListaUsuario();
                // lista debe ser ahora un array de ObjetoInvDTO
                setObjetos(lista);
                setLoading(false);
            } catch (err) {
                // Capturamos el error para que el estado de error funcione
                setError(err.message || "Error al conectar con el servidor");
                setLoading(false);
            }
        };

        fetchInventario();
    }, []);

    if (loading) {
        return (
            <div className="inventario-container">
                <div className="loading-magic">Abriendo baúl de Gringotts...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="inventario-container">
                <div className="error-magic">
                    <p>⚠️ Error al cargar objetos: {error}</p>
                    <button className="retry-btn" onClick={() => window.location.reload()}>
                        Reintentar Hechizo
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="inventario-container">
            <header className="inventario-header">
                <h2>Mis Objetos Comprados</h2>
                <div className="user-stats">
                    <span className="stat-pill gold">
                        Total: {objetos.length} Artefactos
                    </span>
                </div>
            </header>

            <div className="objetos-grid">
                {objetos.length > 0 ? (
                    objetos.map((obj, index) => (
                        // Usamos 'index' o 'obj.nombre' para la key para evitar duplicados
                        <div key={index} className="objeto-item">
                            <div className="objeto-icon">📜</div>
                            <div className="objeto-info">
                                <h3 className="objeto-nombre">{obj.nombre}</h3>
                                <p className="objeto-descripcion">{obj.descripcion}</p>
                                
                                <div className="objeto-detalles">
                                    <span className="objeto-costo">
                                        <strong>Costo:</strong> {obj.costo} 💰
                                    </span>
                                    <span className="objeto-personaje">
                                        <strong>Personaje:</strong> {obj.personaje}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="inventario-vacio">
                        <p>No tienes objetos en tu inventario.</p>
                        <p className="sub-text">Visita la tienda para adquirir nuevas reliquias.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InventarioObjetos;