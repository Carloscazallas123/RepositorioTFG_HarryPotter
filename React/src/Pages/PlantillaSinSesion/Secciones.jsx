import React from 'react';

const Secciones = () => {
  const containerStyle = {
    padding: '50px 20px',
    backgroundColor: '#060b1d',
    textAlign: 'center'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid #d4af37',
    borderRadius: '15px',
    padding: '30px',
    color: 'white'
  };

  return (
    <section style={containerStyle}>
      <h2 style={{ color: '#d4af37', marginBottom: '40px', fontSize: '2.5rem' }}>Manual Orientativo</h2>
      <div style={gridStyle}>
        <div style={cardStyle}>
          <div style={{ fontSize: '4rem' }}>🎩</div>
          <h3>Cuestionario</h3>
          <p>Evalúa tus conocimientos mágicos.</p>
        </div>
        <div style={cardStyle}>
          <div style={{ fontSize: '4rem' }}>🎮</div>
          <h3>Minijuegos</h3>
          <p>Gana puntos superando desafíos.</p>
        </div>
        <div style={cardStyle}>
          <div style={{ fontSize: '4rem' }}>🦉</div>
          <h3>Tienda</h3>
          <p>Productos exclusivos de la saga.</p>
        </div>
      </div>
    </section>
  );
};

export default Secciones;