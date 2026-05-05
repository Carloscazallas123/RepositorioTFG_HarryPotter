import React from 'react';
import './../../Style/SinIniciarSesion/CasasCSS.css';

// Componente para mostrar la carta de cada casa
const CartaCasa = ({ imagen, titulo, descripcion, colorTitulo }) => {
  return (
    <div className="cardContainer">
      <div className="innerCard">
        
        {/* CARA FRONTAL */}
        <div className="commonFace frontFace" style={{ border: `2px solid ${colorTitulo}88` }}>
          <img src={imagen} alt={titulo} />
        </div>

        {/* CARA TRASERA */}
        <div className="commonFace backFace" style={{ border: `2px solid ${colorTitulo}88` }}>
          <h3 style={{ color: colorTitulo }}>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

// Creamos un componente para mostrar las casas de Hogwarts
const Casas = () => {
  const casasData = [
    { id: 'gry', titulo: 'Gryffindor', color: '#ae0001', imagen: '/IconosCasas/Gryffindor.png', desc: 'Representado por el León y bajo los colores del rojo y el dorado, Gryffindor valoriza el coraje, la valentía y la determinación.' },
    { id: 'sly', titulo: 'Slytherin', color: '#2a623d', imagen: '/IconosCasas/Slythering.png', desc: 'Representado por el Serpiente y bajo los colores del verde y el plata, Slytherin valoriza la ambición, el ingenio y la astucia.' },
    { id: 'huf', titulo: 'Hufflepuff', color: '#c4b708', imagen: '/IconosCasas/HufflePuff.png', desc: 'Representado por el Tejón y bajo los colores del amarillo y el negro, Hufflepuff valoriza la lealtad, la paciencia y la dedicación al trabajo duro.' },
    { id: 'rav', titulo: 'Ravenclaw', color: '#222f5b', imagen: '/IconosCasas/RavenClaw.png', desc: 'Representado por el Cuervo y bajo los colores del azul y el plata, Ravenclaw valoriza el ingenio, la sabiduría y la inteligencia superior.' }
  ];

  return (
    <section className="casasSection">
      <h2 className="casasTitle">Casas de Hogwarts</h2>
      <div className="casasGrid">
        {/* Recorremos el array de casas para mostrar cada una con su carta personalizada */}
        {casasData.map(casa => (
          <CartaCasa 
            key={casa.id}
            titulo={casa.titulo}
            descripcion={casa.desc}
            imagen={casa.imagen}
            colorTitulo={casa.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Casas;