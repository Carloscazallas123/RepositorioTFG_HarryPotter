import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Footer/Navbar/navbar';
import Footer from './Pages/Footer/footer';
import Bienvenida from './Pages/PlantillaSinSesion/Bienvenida';
import Secciones from './Pages/PlantillaSinSesion/Secciones';
import Casas from './Pages/PlantillaSinSesion/Casas';

// De momento creamos mini-paginas temporales para probar
const Home = () => <h1 style={{color: 'white', textAlign: 'center'}}>🏰 Bienvenido al Castillo</h1>;
const Tienda = () => <h1 style={{color: 'white', textAlign: 'center'}}>🛍️ Callejón Diagon</h1>;
const Comentarios = () => <h1 style={{color: 'white', textAlign: 'center'}}>🦉 Lechucería</h1>;

function App() {
  return (
    <Router>
       <div>
          <Navbar />
          <Bienvenida/>
          <Secciones/>
          <Casas/>
          <Footer/>
      </div>
      
    </Router>
    
  );
}
export default App;
