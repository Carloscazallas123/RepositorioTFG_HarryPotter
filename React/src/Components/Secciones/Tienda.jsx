import React, { useState, useEffect } from 'react';
import './../../Style/Secciones/TiendaCSS.css';
import ObjetoService from './../../Services/ServicioObjetos';

const Tienda = () => {
    const [objetos, setObjetos] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const datos = await ObjetoService.getTienda();
                setObjetos(datos);
            } catch (error) {
                console.error("Error cargando la tienda:", error);
            }
        };
        cargarDatos();
    }, []);

    if (!objetos || objetos.length === 0) {
        return (
            <div className="tienda-vacia">
                <p>El boticario está reponiendo el inventario... vuelve pronto.</p>
            </div>
        );
    }
    console.log(objetos);
    return (
        <section className="tienda-container">
            <div className="objetos-grid">
                {objetos.map((obj) => (
                    <div key={obj.id} className="objeto-card">
                        <div className="card-inner">
                            {/* PARTE FRONTAL: Solo el icono o imagen */}
                            <div className="card-front">
                                <div className="objeto-icono">
                                    {obj.nombre.toLowerCase().includes('varita') ? '🪄' : '📜'}
                                </div>
                            </div>

                            {/* PARTE TRASERA: Nombre, Descripcion y Coste */}
                            <div className="card-back">
                                <h4 className="objeto-nombre">{obj.nombre}</h4>
                                <div className="divider"></div>
                                <p className="objeto-desc">{obj.descripcio}</p>
                                <div className="objeto-coste">
                                    <span className="precio">{obj.costo} Puntos</span>
                                </div>
                                <button className="btn-comprar">Adquirir</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tienda;