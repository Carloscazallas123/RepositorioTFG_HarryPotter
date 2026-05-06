import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registrarUsuario } from './../../Services/ServicioSesion';
import { alertaExito, alertaError } from './../../Utils/Alertas';
import './../../Style/RegistroSesion/RegistroCSS.css';

const Registrarse = () => {
    // Estado inicial basado en RegistroDTO
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        contraseña: '',
        repcontraseña: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación mágica: ¿Coinciden los encantamientos?
        if (form.contraseña !== form.repcontraseña) {
            return alertaError('Error de duplicación', 'Las contraseñas no coinciden. ¡Revisa tu varita!');
        }

        try {
            await registrarUsuario(form);
            await alertaExito('¡Inscrito!', 'Tu nombre ya figura en el Libro de Escolarización ✍️');
            navigate('/home');
        } catch (err) {
            alertaError('Maldición', err.message);
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
                            value={form.nombre}
                            onChange={handleChange} 
                            placeholder="Ej: Newt Scamander"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>✉️ Email de la Lechuza</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={form.email}
                            onChange={handleChange} 
                            placeholder="mago@hogwarts.com"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>🔐 Contraseña</label>
                        <input 
                            type="password" 
                            name="contraseña" 
                            value={form.contraseña}
                            onChange={handleChange} 
                            placeholder="••••••••"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>🔄 Repetir Contraseña</label>
                        <input 
                            type="password" 
                            name="repcontraseña" 
                            value={form.repcontraseña}
                            onChange={handleChange} 
                            placeholder="••••••••"
                            required 
                        />
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