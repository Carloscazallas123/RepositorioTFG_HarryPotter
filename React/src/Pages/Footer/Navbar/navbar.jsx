import React from 'react';
import { FaBolt } from 'react-icons/fa'; // Icono de rayo
import './../../../Style/Navbar.css';

const Navbar = () => {
  return (
    <nav className="NavBar">
      <div className="ContenedorNav">
        
        {/* SECCIÓN IZQUIERDA: Botón de acceso */}
        <div className="ContendorDerecha">
          <button className="btn-hp-login">INICIAR SESIÓN</button>
        </div>

        {/* SECCIÓN DERECHA: Menú de navegación */}
        <div className="ContendorIzquierda">
          <a href="/personajes" className="Enlaces">PERSONAJES</a>
          <a href="/inventario" className="Enlaces">INVENTARIO</a>
          <span className="hp-nav-icon">⚡</span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;