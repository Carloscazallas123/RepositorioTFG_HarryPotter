import React from 'react';
import './../../Style/SinIniciarSesion/SeccionesCSS.css';
import { Link } from 'react-router-dom';
const Secciones = () => {

  return (
    <section className="seccionesContainer">
      {/* Encabezado con los libros */}
      <div className="tituloWrapper">
        <img src="/Iconos/Libro_Icono.png" alt="Libro mágico" className="imagenLibro" />
        <h2 className="tituloManual">Manual Orientativo</h2>
        <img src="/Iconos/Libro_Icono.png" alt="Libro mágico" className="imagenLibro" />
      </div>

      <div className="seccionesGrid">
        
        {/* SECCIÓN 1: CUESTIONARIO */}
        <div className="seccionCard">
          <div className="imageContainerSeccion">
            <img src="/Imagenes/Sombrero Seleccionador.png" alt="Cuestionario"/>
          </div>
          <Link to="/cuestionario" className="seccionLink">
            <h3>Cuestionario</h3>
          </Link>
          <p>Evalúa tus conocimientos mágicos y descubre tu nivel de hechicería.</p>
        </div>

        {/* SECCIÓN 2: MINIJUEGOS */}
        <div className="seccionCard">
          <div className="imageContainerSeccion">
            <img src="/Imagenes/Minijuegos.png" alt="Minijuegos"/>
          </div>
          <Link to="/minijuegos" className="seccionLink" >
            <h3>Minijuegos</h3>
          </Link>
          <p>Gana puntos para tu casa superando desafíos únicos y duelos de magia.</p>
        </div>

        {/* SECCIÓN 3: TIENDA */}
        <div className="seccionCard">
          <div className="imageContainerSeccion">
            <img src="/Imagenes/Tienda.png" alt="Tienda"/>
          </div>
          <Link to="/tienda" className="seccionLink">
            <h3>Tienda</h3>
          </Link>
          <p>Canjea tus puntos por productos exclusivos y reliquias del mundo mágico.</p>
        </div>

      </div>
    </section>
  );
};

export default Secciones;