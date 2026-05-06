import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinSesion from './Pages/PaginaSinSesion';
import PaginaPrincipal from './Pages/PaginaPrincipal';
import IniciarSesion from './Components/RegistroSesion/IniciarSesion';
import Registrarse from './Components/RegistroSesion/Registro';
function App() {
  return (
    <Router>
      {/* Rutas principales de la aplicación */}
      <Routes>
        <Route path="/" element={<SinSesion/>} />
        <Route path="/login" element={<IniciarSesion/>} />
        <Route path="/registrarse" element={<Registrarse/>} />
        <Route path="/home" element={<PaginaPrincipal/>} />
      </Routes>
    </Router>
    
  );
}
export default App;
