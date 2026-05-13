import React, { useState } from 'react';
import './../../Style/CrearComentariosCSS.css';
import ComentarioService from './../../Services/ServicioComentarios';
import { useNavigate } from 'react-router-dom'; // 👈 Importante para la navegación
const FormularioComentario = () => {
    const [descripcion, setDescripcion] = useState('');
    const [valor, setValor] = useState(0);
    const [enviando, setEnviando] = useState(false);
    const navigate = useNavigate(); // Hook para redirigir
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (valor === 0) {
            alert("Debes asignar una puntuación mágica.");
            return;
        }
        setEnviando(true);

        try {

            const data = await ComentarioService.Comentar(descripcion,valor);
            console.log(data);
            console.log("Crónica guardada:", data);
            setDescripcion('');
            setValor(0);
            alert("¡Mensaje enviado al Gran Comedor!");
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