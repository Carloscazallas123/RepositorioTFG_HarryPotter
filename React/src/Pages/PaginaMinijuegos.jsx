import React from 'react';
import Navbar from '../Components/Navbars/NavbarConSesion';
import Footer from '../Components/Footer';
import BannerMinijuegos from '../Components/Banners/BannerMinijuegos';
import Minijuegos from '../Components/Secciones/Minijuegos';

const PaginaMinijuegos = () => {
  return (
    <div>
        <Navbar/>
        <BannerMinijuegos/>
        <Minijuegos/>
        <Footer/>
    </div>
  );
};

export default PaginaMinijuegos;