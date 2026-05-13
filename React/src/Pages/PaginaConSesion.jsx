import React from 'react';
import Navbar from '../Components/Navbars/NavbarConSesion';
import Footer from '../Components/Footer';
import Bienvenida from '../Components/PlantillaPrincipal/Bienvenida';
import Secciones from '../Components/PlantillaPrincipal/Secciones';
import Casas from '../Components/PlantillaPrincipal/Casas';
import Comentarios from '../Components/PlantillaPrincipal/Comentarios'

const ConSesion = () => {
  const token=localStorage.getItem('usuario');
  console.log(JSON.parse(token));
  
  return (
    <div>
        <Navbar/>
        <Bienvenida/>
        <Secciones/>
        <Casas/>
        <Comentarios/>
        <Footer/>
    </div>
  );
};

export default ConSesion;