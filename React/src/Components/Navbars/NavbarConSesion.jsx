import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../../Style/Navbars/NavbarConSesionCSS.css';
import { alertaError } from '../../Utils/Alertas';
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

    // 2. Comprobación en tiempo de ejecución
    useEffect(() => {
        const mUsuarioString = localStorage.getItem('usuario');

        // 🔥 ESTO TE DIRÁ EN LA CONSOLA QUÉ ESTÁ LEYENDO EL NAVBAR
        console.log("=== INSPECCIÓN DE VARITA (NAVBAR) ===");
        console.log("Usuario String detectado:", mUsuarioString);
        if (mUsuarioString) {
            setUsuario(JSON.parse(mUsuarioString));
        } else {
            // 🚨 SI TE ECHA, ESTE MENSAJE TE DIRÁ POR QUÉ MALDITA VARIABLE ES
            console.warn("¡Expulsado! Motivo ->  Usuario ausente:", !mUsuarioString);
            
            // Le damos un margen de 300ms por si el Login se está retrasando en escribir en el disco
            const timeoutRedireccion = setTimeout(() => {
                const tokenRechequeo = localStorage.getItem('token');
                const usuarioRechequeo = localStorage.getItem('usuario');
                
                if (!tokenRechequeo || !usuarioRechequeo) {
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