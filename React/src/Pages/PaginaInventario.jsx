import React from 'react';
import Navbar from '../Components/Navbars/NavbarConSesion';
import Footer from '../Components/Footer';
import Inventario from '../Components/Navbars/Inventario';
import { Navigate, useNavigate } from 'react-router-dom';

const PaginaInventario = () => {
  const token=localStorage.getItem('usuario');
  console.log(JSON.parse(token));
  return (
    <div>
        <Navbar/>
        <Inventario/>
        <Footer/>
    </div>
  );
};

export default PaginaInventario;