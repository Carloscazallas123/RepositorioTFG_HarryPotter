import React from 'react';
import Navbar from '../Components/Navbars/NavbarConSesion';
import Footer from '../Components/Footer';
import Inventario from '../Components/Navbars/Inventario';
import { Navigate, useNavigate } from 'react-router-dom';

const PaginaInventario = () => {
  return (
    <div>
        <Navbar/>
        <Inventario/>
        <Footer/>
    </div>
  );
};

export default PaginaInventario;