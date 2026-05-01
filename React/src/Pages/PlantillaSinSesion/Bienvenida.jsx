import React from 'react';

const Bienvenida = () => {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px 8%',
    color: 'white',
    minHeight: '550px', 
    flexWrap: 'wrap',
    gap: '40px',
    /* --- ESTILOS DE FONDO --- */
    backgroundImage: "linear-gradient(rgba(8, 16, 43, 0.6), rgba(8, 16, 43, 0.8)), url('./../../../public/Backgrounds/Castillo de Hogwarts.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  const textContentStyle = {
    flex: '1',
    minWidth: '300px',
    maxWidth: '650px',
    textAlign: 'left' 
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#d4af37', 
    fontFamily: "'Cinzel', serif", 
    marginBottom: '20px',
    lineHeight: '1.1',
    fontWeight: 'bold'
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#e0e0e0',
    marginBottom: '25px',
    maxWidth: '550px' // Limita el ancho del párrafo para que no se estire demasiado
  };

  const quoteStyle = {
    color: '#d4af37',
    fontSize: '1.1rem',
    fontStyle: 'italic',
    marginTop: '20px',
    display: 'block',
    paddingLeft: '40px' // Desplazamiento para la firma de Dumbledore
  };

  const visualStyle = {
    flex: '0 1 450px',
    display: 'flex',
    justifyContent: 'center', // Centra el mago en su propia mitad derecha
    alignItems: 'center'
  };

  const wizardEmojiStyle = {
    fontSize: '13rem',
    filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.4))',
    animation: 'float 4s ease-in-out infinite'
  };

  return (
    <section style={sectionStyle}>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
      
      <div style={textContentStyle}>
        <h1 style={titleStyle}>Bienvenido a HogwartWeb</h1>
        <p style={descriptionStyle}>
          Adéntrate a esta página web llena de magia y sumérgete en el maravilloso mundo de Hogwarts. 
          Descubre tu casa, supera los minijuegos y compra productos de la serie.
        </p>
        <span style={quoteStyle}>- Albus Dumbledore</span>
      </div>

      <div style={visualStyle}>
        <div style={wizardEmojiStyle}>🧙‍♂️</div>
      </div>
    </section>
  );
};

export default Bienvenida;