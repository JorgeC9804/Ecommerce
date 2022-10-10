import React from "react";
import "./pages.css/profile.css";

const Profile = () => {
  /**
   * aqui encontraras mi foto de perfil, eh informacion de mi,
   * asi como todos mis productos en venta.
   * debo aclarar que cuando yo visite mi perfil, puedo ver
   * la informacion de mis productos, - cuantas personas han
   * agregado el producto a su carrito, cuantas le han dado me gusta,
   * y cuantas lo han comprado
   *
   * cuantas lo han comprado, debe aparecer con una capa tranparente
   * sin acceso a la informacion
   * por esta razon mandaremos llamar a product_loaded de la base de
   * datos
   */
  return (
    <div>
      <div className="top-c">
        <section className="front-page">my photo of portada</section>
        <div className="profile">my photo of protfile</div>
        <section>
          my information
          <br />
          my cellphone number
        </section>
        <section>mis productos</section>
      </div>
    </div>
  );
};

export default Profile;
