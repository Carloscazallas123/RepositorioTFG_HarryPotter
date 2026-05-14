import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../../Style/Navbars/NavbarConSesionCSS.css';
const NavbarConSesion = () => {
    const navigate = useNavigate();

    // Recuperamos el usuario y el token del almacenamiento local
    const token = localStorage.getItem('token');
    const usuarioString = localStorage.getItem('usuario');
    
    // Parseamos los datos siguiendo el type UsuarioFullDTO
    const usuario = JSON.parse(usuarioString);

    const manejarLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        navigate('/login');
    };

  return (
    <nav className="NavBar">
      <div className="ContenedorNav">
        
        {/* SECCIÓN IZQUIERDA: Reflejamos el estilo del botón de login pero con info del Mago */}
        <div className="ContendorDerecha">
          <div className="hp-session-container">
            <img 
              src={`https://ui-avatars.com/api/?name=${usuario.nombre}&background=d4af37&color=1a0a2e`} 
              alt="Avatar" 
              className="hp-nav-avatar"
            />
            <div className="hp-user-info">
              <span className="hp-user-name">{usuario.nombre}</span>
              <div className="hp-user-tags">
                <span className="hp-tag-casa">{usuario.casa || 'Sin Casa'}</span>
                <span className="hp-tag-puntos">✨ {usuario.puntos || 0} PTS</span>
              </div>
            </div>
            <button onClick={manejarLogout} className="btn-hp-logout-small">
              SALIR 🚪
            </button>
          </div>
        </div>

        {/* SECCIÓN DERECHA: Menú de navegación (Exactamente igual al original) */}
        <div className="ContendorIzquierda">
          <Link to='/personajes' className="Enlaces">PERSONAJES</Link>
          <Link to='/inventario' className="Enlaces">INVENTARIO</Link>
          <Link to={'/home'}>
          <img 
            src="/Iconos/Logo HogwartWeb.png" 
            alt="Logo HogwartWeb" 
            className='ImagenLogo'
          />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarConSesion;