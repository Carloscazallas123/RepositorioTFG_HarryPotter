import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../../Style/Navbars/NavbarConSesionCss.css';
import { alertaError, alertaWarning } from '../../Utils/Alertas';
import './../../Querys/NavBars/NavBarConCesionQuery.css'
const NavbarConSesion = () => {
    const navigate = useNavigate();

    // 1. Intentamos leer lo que haya en el disco duro del navegador
    const [usuario, setUsuario] = useState(() => {
        const usuarioString = localStorage.getItem('usuario');
        try {
            return usuarioString ? JSON.parse(usuarioString) : null;
        } catch (e) {
            console.error("Error al parsear el usuario del localStorage:", e);
            return null;
        }
    });

    // Aqui se comprueba si el usuario ha iniciado sesion o no
        useEffect(() => {
            const token = localStorage.getItem('usuario');
            console.log("=== INSPECCIÓN DE VARITA (NAVBAR) ===");
            console.log("Usuario String detectado:", token);
            if (token) {
                setUsuario(JSON.parse(token));
            } else {
                // Margen de 300m de la pagina principal y la pagina de inicio de sesion
                const timeoutRedireccion = setTimeout(() => {
                    const usuarioRechequeo = localStorage.getItem('usuario');
                    // Si no hay ningun token, te redirige al login
                    if (!usuarioRechequeo) {
                        alertaWarning('No has iniciado Sesion');
                        navigate('/login');
                    }
                }, 300);
    
                return () => clearTimeout(timeoutRedireccion);
            }
        }, [navigate]);

    const manejarLogout = () => {
        localStorage.removeItem('usuario');
        setUsuario(null);
        navigate('/login');
    };

    // Si aún está validando, mostramos la pantalla de carga para que el useEffect trabaje
    if (!usuario) {
        return (
            <div className="hp-nav-loading-placeholder" style={{ color: '#dfcca3', padding: '20px', textAlign: 'center' }}>
                <span>Verificando credenciales mágicas...</span> 
            </div>
        ); 
    }

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