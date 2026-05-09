import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBolt } from 'react-icons/fa'; 
import './../../Style/Navbars/NavbarSinSesionCSS.css';

const Navbar = () => {
  return (
    <nav className="NavBar">
      <div className="ContenedorNav">
        
        {/* SECCIÓN IZQUIERDA: Botón de acceso */}
        <div className="ContendorDerecha">
          <Link to="/login" className="btn-hp-login">INICIAR SESIÓN</Link>
        </div>

        {/* SECCIÓN DERECHA: Menú de navegación */}
        <div className="ContendorIzquierda">
          <Link to='/login' className="Enlaces">PERSONAJES</Link>
          <Link to='/login' className="Enlaces">INVENTARIO</Link>
          <img src="./../../../../public/Iconos/Logo HogwartWeb.png" alt="Logo HogwartWeb" className='ImagenLogo'/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;