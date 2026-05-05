import React from 'react';
import './../../Style/SinIniciarSesion/BienvenidaCSS.css'; 
import Navbar from './Components/Navbars/NavbarSinSesion';
import Footer from './Components/Footer';
import Bienvenida from './Components/PlantillaSinSesion/Bienvenida';
import Secciones from './Components/PlantillaSinSesion/Secciones';
import Casas from './Components/PlantillaSinSesion/Casas';

const SinSesion = () => {
  return (
    <div>
        <Navbar/>
        <Bienvenida/>
        <Secciones/>
        <Casas/>
        <Footer/>
    </div>
  );
};

export default SinSesion;