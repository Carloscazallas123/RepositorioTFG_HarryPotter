import React from 'react';
import './../../Style/SinIniciarSesion/SeccionesCSS.css';

const Secciones = () => {
  const cardsData = [
    { id: 1, title: 'Cuestionario', desc: 'Evalúa tus conocimientos mágicos y descubre tu nivel.', img: '/Imagenes/Sombrero Seleccionador.png' },
    { id: 2, title: 'Minijuegos', desc: 'Gana puntos para tu casa superando desafíos únicos.', img: '/Imagenes/Minijuegos.png' },
    { id: 3, title: 'Tienda', desc: 'Canjea tus puntos por productos exclusivos del mundo mágico.', img: '/Imagenes/Tienda.png' }
  ];

  return (
    <section className="seccionesContainer">
      <div className="tituloWrapper">
        <img src="/Iconos/Libro_Icono.png" alt="Libro mágico" className="imagenLibro" />
        <h2 className="tituloManual">Manual Orientativo</h2>
        <img src="/Iconos/Libro_Icono.png" alt="Libro mágico" className="imagenLibro" />
      </div>

      <div className="seccionesGrid">
        {cardsData.map((card) => (
          <div key={card.id} className="seccionCard">
            <div className="imageContainerSeccion">
              <img src={card.img} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Secciones;