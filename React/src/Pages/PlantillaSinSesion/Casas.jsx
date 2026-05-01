import React from 'react';

const Casas = () => {
  const houseBox = (color, name, desc, emoji, isRight) => ({
    display: 'flex',
    flexDirection: isRight ? 'row-reverse' : 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderLeft: !isRight ? `6px solid ${color}` : 'none',
    borderRight: isRight ? `6px solid ${color}` : 'none',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    textAlign: isRight ? 'right' : 'left'
  });

  return (
    <section style={{ padding: '60px', backgroundColor: '#08102B' }}>
      <h2 style={{ color: '#d4af37', textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>Casas de Hogwarts</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        
        <div style={houseBox('#740001', 'Gryffindor', 'Coraje y valentía...', '🦁', false)}>
          <div style={{ fontSize: '4rem', padding: '10px' }}>🦁</div>
          <div><h3 style={{ color: '#ae0001' }}>Gryffindor</h3><p style={{ color: '#ccc' }}>Coraje y valentía.</p></div>
        </div>

        <div style={houseBox('#1a472a', 'Slytherin', 'Ambición y astucia...', '🐍', true)}>
          <div style={{ fontSize: '4rem', padding: '10px' }}>🐍</div>
          <div><h3 style={{ color: '#2a623d' }}>Slytherin</h3><p style={{ color: '#ccc' }}>Ambición y astucia.</p></div>
        </div>

        {/* ... Repetir para Hufflepuff y Ravenclaw ... */}
      </div>
    </section>
  );
};

export default Casas;