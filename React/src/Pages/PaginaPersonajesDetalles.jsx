import React from 'react';
import Navbar from '../Components/Navbars/NavbarConSesion';
import Footer from '../Components/Footer';
import PersonajeDetalle from './../Components/Navbars/PersonajesDetalle'

const PaginaPersonajeDetalles = () => {
  const token=localStorage.getItem('usuario');
  console.log(JSON.parse(token));
  return (
    <div>
        <Navbar/>
        <PersonajeDetalle/>
        <Footer/>
    </div>
  );
};

export default PaginaPersonajeDetalles;