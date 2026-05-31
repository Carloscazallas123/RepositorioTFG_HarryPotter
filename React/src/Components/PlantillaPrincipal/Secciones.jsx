import React from 'react';
import './../../Style/SinIniciarSesion/SeccionesCSS.css';
import './../../Querys/Principal/SeccionesQuery.css'
import { Link } from 'react-router-dom';
const Secciones = () => {

  return (
    <section className="seccionesContainer">

      <div className="tituloWrapper">
        <img src="/Iconos/Libro_Icono.png" alt="Libro mágico" className="imagenLibro" />
        <h2 className="tituloManual">Manual Orientativo</h2>
        <img src="/Iconos/Libro_Icono.png" alt="Libro mágico" className="imagenLibro" />
      </div>

      <div className="seccionesGrid">

        <Link to="/cuestionario" className="seccionLink">
        <div className="seccionCard">
          <div className="imageContainerSeccion">
            <img src="/Imagenes/Sombrero Seleccionador.png" alt="Cuestionario"/>
          </div>
          
            <h3>Cuestionario</h3>
          
          <p>Evalúa tus conocimientos mágicos y descubre tu nivel de hechicería.</p>
        </div>
        </Link>

        <Link to="/minijuegos" className="seccionLink" >
        <div className="seccionCard">
          <div className="imageContainerSeccion">
            <img src="/Imagenes/Minijuegos.png" alt="Minijuegos"/>
          </div>
          <Link to="/minijuegos" className="seccionLink" >
            <h3>Minijuegos</h3>
          </Link>
          <Link to="/minijuegos" className="seccionLink" >
              <p>Gana puntos para tu casa superando desafíos únicos y duelos de magia.</p>
          </Link>
          
        </div>
        </Link>


        <Link to="/tienda" className="seccionLink">
        <div className="seccionCard">
          <div className="imageContainerSeccion">
            <img src="/Imagenes/Tienda.png" alt="Tienda"/>
          </div>
          
            <h3>Tienda</h3>
          
          <p>Canjea tus puntos por productos exclusivos y reliquias del mundo mágico.</p>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default Secciones;