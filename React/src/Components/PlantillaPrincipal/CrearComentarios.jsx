import React, { useState } from 'react';
import './../../Style/CrearComentariosCSS.css';
import ComentarioService from './../../Services/ServicioComentarios';
import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';
import { alertaError, alertaExito } from './../../Utils/Alertas';

const FormularioComentario = () => {
    const [descripcion, setDescripcion] = useState('');
    const [valor, setValor] = useState(0);
    const [enviando, setEnviando] = useState(false);
    const navigate = useNavigate(); // Hook para redirigir

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (valor === 0) {
            alertaError('Ups!!','Debes indicar las estrellas');
            return;
        }
        setEnviando(true);

        try {

            const data = await ComentarioService.Comentar(descripcion,valor);
            console.log(data);
            console.log("Crónica guardada:", data);
            setDescripcion('');
            setValor(0);
            alertaExito('Genial','El Comentario ha sido enviado');
            navigate('/home');
            
        } catch (error) {
            alert(error.message);
        } finally {
            setEnviando(false);
        }
    };

    return (
        <form className="comentario-form" onSubmit={handleSubmit}>
            <div className="valoracion-container">
                <label>Puntuación:</label>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span 
                            key={num} 
                            className={`star ${valor >= num ? 'active' : ''}`}
                            onClick={() => setValor(num)}
                        >
                            {valor >= num ? '★' : '☆'}
                        </span>
                    ))}
                </div>
            </div>

            <textarea
                placeholder="Escribe tu crónica..."
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                maxLength={1000}
                required
            />

            <div className="form-footer">
                <span>{descripcion.length} / 1000</span>
                <button type="submit" disabled={enviando} className="magic-button">
                    {enviando ? 'Enviando búho...' : 'Publicar'}
                </button>
            </div>
        </form>
    );
};

export default FormularioComentario;