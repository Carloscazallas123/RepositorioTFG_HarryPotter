import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUsuario } from './../../Services/ServicioSesion';
import './../../Style/RegistroSesion/IniciarSesionCSS.css';
import { alertaError, alertaExito } from '../../Utils/Alertas';

const IniciarSesion = () => {
    const [nombre, setNombre] = useState('');
    const [pass, setPass] = useState('');
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const navigate = useNavigate();

    const toggleContraseña = () => { setMostrarContraseña(!mostrarContraseña); };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        const datosParaEnviar = { nombre: nombre, contraseña: pass };
        try {
            const resultado = await loginUsuario(datosParaEnviar);
            alertaExito('Bienvenido a HogwartsWeb');
            navigate('/home'); 
        } catch (err) {
            await alertaError('No se pudo iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Alohomora</h2>
                <p className="subtitle">Identifícate ante el Guardián 💂‍♂️</p>
                
                <form onSubmit={manejarEnvio}>
                    <div className="form-group">
                        <label>👤 Nombre del Mago</label>
                        <input 
                            type="text" 
                            placeholder="Ej: Harry Potter" 
                            onChange={(e) => setNombre(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>🔐 Contraseña</label>
                        <input 
                            type={mostrarContraseña ? "text" : "password"}
                            placeholder="••••••••" 
                            onChange={(e) => setPass(e.target.value)} 
                            required
                        />
                        <button 
                        type="button" 
                        onClick={toggleContraseña} 
                        style={{ position: 'absolute', right: '10px', top: '30%' }}>
                        {mostrarContraseña ? "🙈" : "👁️"}
                        </button>
                    </div>

                    <button type="submit" className="login-button">
                        Entrar al Castillo 🏰
                    </button>
                </form>

                <div className="login-footer">
                    <p>¿Aún no tienes plaza en Hogwarts? 🦉</p>
                    <Link to="/registrarse" className="register-link">
                        ✍️ Inscribirse en el Libro de Escolarización
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IniciarSesion;