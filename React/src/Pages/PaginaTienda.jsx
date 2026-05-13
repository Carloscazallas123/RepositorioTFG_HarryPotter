import React, { useState, useEffect } from 'react';
import Navbar from './../Components/Navbars/NavbarConSesion';
import Footer from './../Components/Footer';
import BannerTienda from './../Components/Banners/BannerTienda';
import Tienda from './../Components/Secciones/Tienda';
import { alertaError } from '../Utils/Alertas';
import { useNavigate } from 'react-router-dom'; 

const PaginaTienda = () => {
  return (
    <div>
        <Navbar/>
        <BannerTienda/>
        <Tienda/>
        <Footer/>
    </div>
  );
};

export default PaginaTienda;