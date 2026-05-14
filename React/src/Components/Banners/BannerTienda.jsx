import React from 'react';
import './../../Style/Banner/BannerTienda.css'

const BannerTienda = () => {
  return (
    <section className="heroSectionn">
      <div className="textContenty">
        <h1 className="titlee">Tienda de Objetos</h1>
        <p className="descriptionn">
          Adentrate en al magina tienda de Hogwarts y compra objetos caracteristicos de la serie.
        </p>
        <span className="quotee">- Albus Dumbledore</span>
      </div>
      <div className="visualContentt">
        <img src="./../../../public/Imagenes/Buho Libros.png" className="characterImagee" alt="Buho" />
      </div>
    </section>
  );
};

export default BannerTienda;