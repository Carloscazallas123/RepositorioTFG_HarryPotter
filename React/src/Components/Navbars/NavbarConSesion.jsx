import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import './../../Style/NavbarCSS.css';

const NavbarConSesion = () => {
    const navigate = useNavigate();
    
    // Obtenemos el objeto usuario del localStorage
    // Asumiendo que lo guardaste como JSON.stringify(usuario)
    const usuarioString = localStorage.getItem('usuario');
    const usuario = usuarioString ? JSON.parse(usuarioString) : null;

    const manejarLogout = () => {
        localStorage.removeItem('usuario'); // Borramos el rastro mágico
        navigate('/iniciarsesion'); // Volvemos a la entrada del castillo
    };

    return (
        <nav className="NavBar">
            <div className="ContenedorNav">
                
                {/* SECCIÓN IZQUIERDA: Info del Usuario y Logout */}
                <div className="ContendorDerecha">
                    <div className="user-pill">
                        <img 
                            src={`https://ui-avatars.com/api/?name=${usuario?.nombre || 'Mago'}&background=d4af37&color=fff`} 
                            alt="Avatar" 
                            className="nav-avatar"
                        />
                        <span className="mago-nombre">{usuario?.nombre || 'Mago'}</span>
                    </div>
                    <button onClick={manejarLogout} className="btn-hp-logout">
                        SALIR 🚪
                    </button>
                </div>

                {/* SECCIÓN DERECHA: Menú de navegación real */}
                <div className="ContendorIzquierda">
                    <Link to='/personajes' className="Enlaces">PERSONAJES</Link>
                    <Link to='/inventario' className="Enlaces">INVENTARIO</Link>
                    <img 
                        src="/Iconos/Logo HogwartWeb.png" 
                        alt="Logo HogwartWeb" 
                        className='ImagenLogo'
                    />
                </div>
            </div>
        </nav>
    );
};

export default NavbarConSesion;