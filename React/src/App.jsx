import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinSesion from './Pages/PaginaSinSesion';
import IniciarSesion from './Components/RegistroSesion/IniciarSesion';

function App() {
  return (
    <Router>
      {/* Rutas principales de la aplicación */}
      <Routes>
        <Route path="/" element={<SinSesion/>} />
        <Route path="/login" element={<IniciarSesion/>} />
      </Routes>
    </Router>
    
  );
}
export default App;
