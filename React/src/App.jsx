import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
{/* Importes de las Paginas Con Sesion */}
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

{/* Importe de la ruta del Comentario*/}
import FormularioComentario from './Components/PlantillaPrincipal/CrearComentarios';

{/* Importe de la ruta del las Secciones */}
import PaginaTienda from './Pages/PaginaTienda';
import PaginaMinijuegos from './Pages/PaginaMinijuegos';
import PaginaCuestionario from './Components/Secciones/Cuestionario';
{/* Importe da ruta de los Juegos */}
import Quidditch from './Components/Secciones/juegos/Quidditch';
import CarreraEscobas from './Components/Secciones/juegos/Memoria';
import MinijuegoMemoria from './Components/Secciones/juegos/Memoria';
import DueloMagos from './Components/Secciones/juegos/DueloMagos';

function App() {
  return (
    <Router>
      {/* Rutas principales de la aplicación */}
      <Routes>
        <Route path="/" element={<SinSesion/>} />
        <Route path="/login" element={<IniciarSesion/>} />
        <Route path="/registrarse" element={<Registrarse/>} />
        <Route path="/home" element={<PaginaPrincipal/>} />
        <Route path="/tienda" element={<PaginaTienda/>} />
        <Route path='/minijuegos' element={<PaginaMinijuegos/>}/>
        <Route path='/cuestionario' element={<PaginaCuestionario/>}/>
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
      {/* Rutas del la Pagina Principal */}
      <Routes>
      <Route path='/comentar' element={<FormularioComentario/>}/>
      </Routes>

      {/* Rutas del la Pagina Principal */}
      <Routes>
      <Route path='/quidditch' element={<Quidditch/>}/>
      <Route path='/memoria' element={<MinijuegoMemoria/>}/>
      <Route path='/duelo' element={<DueloMagos/>}/>
      </Routes>
    </Router>
    
  );
}
export default App;
