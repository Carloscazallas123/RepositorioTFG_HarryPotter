import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registrarUsuario } from './../../Services/ServicioSesion';
import { alertaExito, alertaError } from './../../Utils/Alertas';
import './../../Style/RegistroSesion/RegistroCSS.css';

const Registrarse = () => {
    const [nombre, setNombre] = useState('');
    const [email, setemail] = useState('');
    const [contraseña, setcontraseña] = useState('');
    const [repcontraseña, setRepcontraseña] = useState('');
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const [mostrarRepcontraseña, setMostrarRepcontraseña] = useState(false);
    const navigate = useNavigate();

    const toggleContraseña = () => { setMostrarContraseña(!mostrarContraseña);};
    const toggleRepcontrasena = () => { setMostrarRepcontraseña(!mostrarRepcontraseña);};

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        if (contraseña !== repcontraseña) {
            return alertaError('Las contraseñas no coinciden. ¡Revisa tu varita!');
        }

        try {
            const resultado=  await registrarUsuario(nombre,email,contraseña,repcontraseña);
            await alertaExito('Tu nombre ya figura en el Libro de Escolarización ✍️');
            navigate('/home');
        } catch (err) {
            alertaError('Cuenta Ya existente');
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Inscripción 📜</h2>
                <p className="subtitle">Forma parte de la historia de Hogwarts</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>👤 Nombre del Mago</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}  
                            placeholder="Ej: Newt Scamander"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>✉️ Email de la Lechuza</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setemail(e.target.value)} 
                            placeholder="mago@hogwarts.com"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>🔐 Contraseña</label>
                        <input 
                            type={mostrarContraseña ? "text" : "password"}
                            name="contraseña" 
                            value={contraseña}
                            onChange={(e) => setcontraseña(e.target.value)} 
                            placeholder="••••••••"
                            required 
                        />
                        <button 
                        type="button" 
                        onClick={toggleContraseña} 
                        style={{ position: 'absolute', right: '10px', top: '30%' }}>
                        {mostrarContraseña ? "🙈" : "👁️"}
                    </button>
                    </div>

                    <div className="form-group">
                        <label>🔄 Repetir Contraseña</label>
                        <input 
                            type={mostrarRepcontraseña ? "text" : "password"}
                            name="repcontraseña" 
                            value={repcontraseña}
                            onChange={(e) => setRepcontraseña(e.target.value)} 
                            placeholder="••••••••"
                            required 
                        />

                        <button 
                        type="button"
                        onClick={toggleRepcontrasena}
                        style={{ position: 'absolute', right: '10px', top: '30%' }}
                        > {mostrarRepcontraseña ? "🙈" : "👁️"}
                        </button>
                    </div>

                    <button type="submit" className="register-button">
                        Firmar Pergamino 🖋️
                    </button>
                </form>

                <div className="register-footer">
                    <Link to="/login" className="back-link">
                        ¿Ya tienes cuenta? Ve al Gran Comedor 🏰
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Registrarse;