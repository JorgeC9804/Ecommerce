import axios from "axios";

const handleActiveDesactiveLater = async (response, productId, setStatus) => {
  const { data } = await axios.patch(`http://localhost:3000/api/v1/icons`, {
    productId,
    response,
  });

  // active useEffect
  setStatus(data);
};

// analiza todos los productos del usuario en cart
export const handleAnalyzeProductsCart = (productId, productsCart) => {
  for (const data of productsCart) {
    if (data.productId === productId) {
      return true;
    }
  }
  return false;
};

// analiza y cambia si el producto a salvar esta actividad
export const handleAnalyzeActiveDesactive = (
  response,
  productId,
  icons,
  setStatus
) => {
  /**
   * por medio del arreglo adquirido por una respuesta del
   * servidor, se analizara la informacion del usurio
   */

  for (const data of icons) {
    if (data.productId === productId) {
      /**
       * gracias a estas instrucciones analizaremos si existe
       * si existe la informacion procederemos a hacer un ligero cambio
       * Pero primero debemos resolver el hecho de que pueda cambiar de active a desactive
       * asi que el analizador de informacion hara la tarea de buscar en el arreglo iconos si existe
       * informacion, necesitaremos el userId y el productId para cambiar el status
       *
       * si la informacion existe cambiar el status de - statusLater -
       */
      handleActiveDesactiveLater(response, productId, setStatus);

      return true;
    }
  }
};
