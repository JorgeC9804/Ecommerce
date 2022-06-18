import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ userInfo }) => {
  const { id } = userInfo;
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const handleErrorUser = () => {
    console.log("error");
  };

  const handleAddProductCart = async (userId, productId) => {
    /**
     * no es que no este funcionando mi servidor
     * mas bien, userId es indefinido, se entiende esta parte, porque desde el momento
     * en el que se monta el componente sin ningunn usuario registrado
     * este esta enviando un objeto vacio
     */

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/userCart",
        {
          productId,
          userId,
        }
      );

      setCartProducts(response);
    } catch (error) {
      console.log("server error");
    }
  };

  const handleGetProduct = async () => {
    /**
     * no neceitamos de un usuario para que este mande llamar todos los productos existentes,
     * de hecho no iniciaremos con un middleware de seguridad para este middleware products
     *
     * Ahora bien, lo que veo es que si esta ejecutando al instante la API, sin que tenga que llamar
     * una dependencia de useEffect
     */
    const response = await axios.get(
      "https://ecommerce-nodejs-jorge.herokuapp.com/api/v1/products"
    );
    const { data } = response.data;
    setProducts(data);
  };

  const handleGetAllCartProducts = async () => {
    /**
     * llama todos los productos del carrito del usuario
     *
     * para obtener solamente los productos de mi carrito
     *
     * lo que necesitamos es mandar el id del usuario para que solamente nos devuelva
     * el carrito que pertenece a ese usuario
     */
    const response = await axios.post(
      "https://ecommerce-nodejs-jorge.herokuapp.com/api/v1/userCart/cart",
      {
        userId: id,
      }
    );
    const { userCart } = response.data.data;
    console.log(userCart);
  };

  useEffect(() => {
    /**
     * si useEffect esta ejecutandose, no activa a cart, porque se necesita de un usuario
     * con sesion iniciada para que pueda mandar una peticion
     */
    handleGetProduct();
    if (id) {
      handleGetAllCartProducts();
    }
    console.log("me estoy ejecuntado");
  }, [cartProducts, userInfo]);

  return (
    <div className="map-cart">
      {products.map(product => (
        <div key={product.id} className="cart-product">
          {product.productName}
          <button
            onClick={
              userInfo
                ? () => handleAddProductCart(id, product.id)
                : handleErrorUser
            }
            className={userInfo ? "add-products-cart" : "log-add-products-cart"}
          >
            add cart
          </button>
          <button>buy</button>
          {product.id}
        </div>
      ))}
    </div>
  );
};

export default Products;
