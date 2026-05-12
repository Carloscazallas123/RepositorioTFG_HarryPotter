import React from 'react';
import Navbar from '../Components/Navbars/NavbarConSesion';
import Footer from '../Components/Footer';
import PersonajeDetalle from './../Components/Navbars/PersonajesDetalle'

const PaginaPersonajeDetalles = () => {
  console.log(localStorage.getItem('usuario'));
  return (
    <div>
        <Navbar/>
        <PersonajeDetalle/>
        <Footer/>
    </div>
  );
};

export default PaginaPersonajeDetalles;