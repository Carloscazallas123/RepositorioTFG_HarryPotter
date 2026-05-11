import React from 'react';
import Navbar from '../Components/Navbars/NavbarConSesion';
import Footer from '../Components/Footer';
import PersonajesList from '../Components/Navbars/Personajes';

const PaginaPersonajes = () => {
  console.log(localStorage.getItem('usuario'));
  return (
    <div>
        <Navbar/>
        <PersonajesList/>
        <Footer/>
    </div>
  );
};

export default PaginaPersonajes;