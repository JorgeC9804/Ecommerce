import React, { useEffect, useState } from "react";
import {
  BsClockHistory,
  BsClockFill,
  BsHeartFill,
  BsHeart,
} from "react-icons/bs";

import {
  handleAnalyzeProductsCart,
  handleAnalyzeActiveDesactive,
} from "./utils.products";
import axios from "axios";

const Products = ({ userInfo, log, login }) => {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [status, setStatus] = useState(null);
  // const [statusLove, setStatusLove] = useState("");
  // const [iconLove, setIconLove] = useState("");
  const [responseIcons, setResponseIcons] = useState([]);
  const [icons, setIcons] = useState([]);
  const { id } = userInfo;
  let aux = 0;
  let ID = 0;
  log ? (ID = log.data.data.user.id) : (ID = undefined);

  // crearemos una nueva fila con informacion de lo que estamos salvando
  const handleActiveIcon = async (response, productId, userId) => {
    if (handleAnalyzeActiveDesactive(response, productId, icons, setStatus))
      return;

    const result = await axios.post("http://localhost:3000/api/v1/icons", {
      later: response === "LATER" ? "active" : "desactive",
      love: response === "LOVE" ? "active" : "desactive",
      userId,
      productId,
    });

    // active useEffect
    setResponseIcons(result);
  };

  const handleErrorUser = () => {
    console.log("error");
  };

  const handleAddProductCart = async (userId, productId) => {
    /**
     * no es que no este funcionando mi servidor
     * mas bien, userId es indefinido, se entiende esta parte, porque desde el momento
     * en el que se monta el componente sin ningunn usuario registrado
     * este esta enviando un objeto vacio
     *
     * >> cada que se agregue un producto, hay que restarlo de
     * >> la base de datos, directamente de productos,
     * >> cuando los productos esten inexistentes, deshabilitar
     * >> la publicacion
     *
     * si el producto ya fue agregado, entonces establecer una condicion donde diga que si
     * el producto esta agregado y si el usuario son iguales al que tiene el producto agregado y al usuario
     * logeado, entonces cambiar configuracion
     */
    // console.log(productsCart);

    if (handleAnalyzeProductsCart(productId, productsCart)) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/userCart",
        //"https://ecommerce-nodejs-jorge.herokuapp.com/api/v1/userCart",

        {
          productId,
          userId,
        }
      );

      setProductCart(response);
      console.log(response);
    } catch (error) {
      console.log("server error");
    }
  };

  const handleGetProduct = async () => {
    /**
     * no necesitamos de un usuario para que este mande llamar todos los productos existentes,
     * de hecho no iniciaremos con un middleware de seguridad para este middleware products
     *
     * Ahora bien, lo que veo es que si esta ejecutando al instante la API, sin que tenga que llamar
     * una dependencia de useEffect
     */

    const response = await axios.get(
      `http://localhost:3000/api/v1/products`
      //"https://ecommerce-nodejs-jorge.herokuapp.com/api/v1/products"
    );

    const { data } = response.data;
    setProducts(data);
    // console.log(data);
  };

  useEffect(() => {
    /**
     * obtendremos la informacion del usurio para saber cuantos
     * productos les a dado later, asi que mandaremos el id al servidor
     * para que este solo devuelva - get - la informacion del usuario
     */
    /**
     * recuerda que el hook se ejecuta una vez se tenga el renderizado
     */

    const handleGetMyIcons = async () => {
      if (ID) {
        /**
         * primero en ejecutarse
         * nos devuelve todas las filas creadas por el id
         * eso quiere decir que exiten n cantidad de filas creadas
         * que tienen la propiedad later y love con valores
         * ya establecidos con desactive
         */
        const res = await axios.get(`http://localhost:3000/api/v1/icons/${ID}`);
        const { response } = res.data.data;

        // console.log(response);
        /**
         * Necesito la informacion del usuario que ah enviado
         * sobre sus favoritos
         */
        setIcons(response);
      }
    };

    // console.log("debo ser nivel 2");
    /**
     * se esta ejecutando primero el ultimo hook, esto quiere decir
     * que la infomacion establecida desde el hook principal, no me
     * servira, porque es lo primero que necesito, pero como se
     * ejecuta primero el ultimo hook y despues el padre, entonces
     * hau un problema ahi
     */
    handleGetProduct(); // primero cargar los productos
    handleGetMyIcons(); // segundo cargar los guardados
  }, [responseIcons, login, status]);

  useEffect(() => {
    /**
     * si useEffect esta ejecutandose, no activa a cart, porque se necesita de un usuario
     * con sesion iniciada para que pueda mandar una peticion
     */
    const handleGetAllCartProducts = async () => {
      /**
       * llama todos los productos del carrito del usuario
       *
       * para obtener solamente los productos del carrito del usuario
       *
       * lo que necesitamos es mandar el id del usuario logeado para que solamente nos devuelva
       * el carrito que pertenece a ese usuario
       *
       * >>> solo lo muestra en terminal
       */
      const response = await axios.post(
        "http://localhost:3000/api/v1/userCart/cart",
        //"https://ecommerce-nodejs-jorge.herokuapp.com/api/v1/userCart/cart",
        {
          userId: id,
        }
      );
      const { userCart } = response.data.data;
      setProductsCart(userCart);
      console.log(userCart);
    };

    handleGetProduct();
    if (id) {
      handleGetAllCartProducts();
    }
  }, [productCart, userInfo, id]);

  return (
    <div className="map-cart">
      {products.map(product => (
        <div key={product.id} className="cart-product">
          {product.nameProduct}
          <br />
          {id === product.user.id ? (
            <>your product</>
          ) : (
            <>
              property {product.user.name}
              <br />
              <button
                onClick={
                  userInfo
                    ? () => handleAddProductCart(id, product.id)
                    : handleErrorUser
                }
                className={
                  userInfo ? "add-products-cart" : "log-add-products-cart"
                }
              >
                add cart
              </button>
              <br />
              quantity - {product.quantity}
              <br />
              <button>buy desactivate</button>
              <div className="row sec-icons">
                <button
                  className="sec-later center"
                  onClick={() => handleActiveIcon("LATER", product.id, id)}
                >
                  {ID === undefined ? (
                    <>
                      <BsClockHistory className="icon-later" />
                    </>
                  ) : product.icons.length === 0 ? (
                    <BsClockHistory className="icon-later" />
                  ) : (
                    product.icons.map((ele, id) => {
                      if (ID === ele.userId) {
                        if (ele.later === "active") {
                          aux = 0;
                          return (
                            <div key={id}>
                              <BsClockFill className="icon-later" />
                            </div>
                          );
                        } else if (ele.later === "desactive") {
                          aux = 0;
                          return (
                            <div key={id}>
                              <BsClockHistory className="icon-later" />
                            </div>
                          );
                        }
                      } else if (ID !== ele.userId) {
                        aux = aux + 1;
                      }
                      if (product.icons.length === aux) {
                        aux = 0;
                        return (
                          <div key={id}>
                            <BsClockHistory className="icon-later" />
                          </div>
                        );
                      }
                    })
                  )}
                </button>
                <div style={{ display: "none" }}>{(aux = 0)}</div>
                <button
                  className="sec-later center"
                  onClick={() => handleActiveIcon("LOVE", product.id, id)}
                >
                  {ID === undefined ? (
                    <>
                      <BsHeart className="icon-later" />
                    </>
                  ) : product.icons.length === 0 ? (
                    <BsHeart className="icon-later" />
                  ) : (
                    product.icons.map((ele, id) => {
                      if (ID === ele.userId) {
                        if (ele.love === "active") {
                          aux = 0;
                          return (
                            <div key={id}>
                              <BsHeart className="icon-later" />
                            </div>
                          );
                        } else if (ele.love === "desactive") {
                          aux = 0;
                          return (
                            <div key={id}>
                              <BsHeartFill className="icon-love" />
                            </div>
                          );
                        }
                      } else if (ID !== ele.userId) {
                        aux = aux + 1;
                      }
                      if (product.icons.length === aux) {
                        aux = 0;
                        return (
                          <div key={id}>
                            <BsHeart className="icon-later" />
                          </div>
                        );
                      }
                    })
                  )}
                </button>
              </div>
            </>
          )}
          <br />
          product number : {product.id}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Products;
