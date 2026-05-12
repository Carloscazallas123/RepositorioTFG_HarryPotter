import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
{/* Importes de las Paginas */}
import SinSesion from './Pages/PaginaSinSesion';
import PaginaPrincipal from './Pages/PaginaConSesion';
{/* Rutas de los Componentes para la Sesión */}
import IniciarSesion from './Components/RegistroSesion/IniciarSesion';
import Registrarse from './Components/RegistroSesion/Registro';
{/* Importe de las Rutas del Footer */}
import AcercaDeNosotros from './Components/PaginasFooter/AcercaNosotros';
import Accesibilidad from './Components/PaginasFooter/Accesibilidad';
import PoliticaCookies from './Components/PaginasFooter/PoliticaCookes';
import MapaDelSitio from './Components/PaginasFooter/MapaSitio';
import GuiaEstilo from './Components/PaginasFooter/GuiaEstilo'; 
import PropiedadIntelectual from './Components/PaginasFooter/Intelectual';
{/* Importe de las Rutas del NavBar */}
import PaginaInventario from './Pages/PaginaInventario';
import PaginaPersonajes from './Pages/PaginaPersonajes';
import PaginaPersonajeDetalles from './Pages/PaginaPersonajesDetalles';

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
      {/* Rutas del Footer */}
      <Routes>
        <Route path="/nosotros" element={<AcercaDeNosotros/>} />
        <Route path="/accesibilidad" element={<Accesibilidad/>} />
        <Route path="/cookies" element={<PoliticaCookies/>} />
        <Route path='/mapa' element={<MapaDelSitio/>}/>
        <Route path='/estilo' element={<GuiaEstilo/>}/>
        <Route path='/intelectual' element={<PropiedadIntelectual/>}/>
      </Routes>
      {/* Rutas del NavBar */}
      <Routes>
        <Route path='/inventario' element={<PaginaInventario/>}/>
        <Route path='/personajes' element={<PaginaPersonajes/>}/>
        <Route path='/detalles/:id' element={<PaginaPersonajeDetalles/>}/>
      </Routes>
    </Router>
    
  );
}
export default App;
