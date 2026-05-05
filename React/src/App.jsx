import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinSesion from './Pages/PaginaSinSesion';

// De momento creamos mini-paginas temporales para probar
const Home = () => <h1 style={{color: 'white', textAlign: 'center'}}>🏰 Bienvenido al Castillo</h1>;
const Tienda = () => <h1 style={{color: 'white', textAlign: 'center'}}>🛍️ Callejón Diagon</h1>;
const Comentarios = () => <h1 style={{color: 'white', textAlign: 'center'}}>🦉 Lechucería</h1>;

function App() {
  return (
    <Router>
      {/* Rutas principales de la aplicación */}
      <Routes>
        <Route path="/" element={<SinSesion/>} />
      </Routes>
    </Router>
    
  );
}
export default App;
