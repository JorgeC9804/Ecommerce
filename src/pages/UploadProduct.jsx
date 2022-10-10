import React, { useState } from "react";
import axios from "axios";
import "./pages.css/principalTwo.styles.css";

const UplodadProduct = ({ login }) => {
  const [nameProduct, setNamePorduct] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [inputActive, setInputActive] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [comments, setComments] = useState("");

  const { id } = login.data.data.user;
  const userId = id;

  const handleActive = () => {
    setInputActive("input-product-active");
  };

  const handleAuthenticatedCategoty = () => {
    if (
      nameProduct === "" ||
      +categoryId === 0 ||
      +categoryId > 4 ||
      price === ""
    ) {
      console.log("error");
      return false;
    } else return true;
  };

  const handleCreateProduct = async e => {
    e.preventDefault();
    if (handleAuthenticatedCategoty()) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/products",
          //"https://ecommerce-nodejs-jorge.herokuapp.com/api/v1/products",
          {
            // corregir de la base de datos
            nameProduct,
            price,
            quantity,
            categoryId,
            userId,
          }
        );
        // await axios.get("", {});
        let productId = response.data.data.product.id;
        /*const res = await axios.post(
          `http://localhost:3000/api/v1/productsLoaded/${userId}`
        );*/
        // estamos creando la fila, tenemos al usuario que subio el producto
        // y a dicho producto subido
        await axios.post("http://localhost:3000/api/v1/loadedProducts", {
          userId,
          productId,
        });

        console.log(response);
        setNamePorduct("");
        setCategoryId(0);
        setPrice("");
      } catch (error) {
        console.log("error server");
      }
    } else {
      // category id = 0 || < 4 --> error ---> not found in the database
      // warning user
    }

    e.target.reset();
  };

  return (
    <div className="principal-profile">
      <section className="name-product">
        <form
          action="/"
          onSubmit={handleCreateProduct}
          className="form-product"
        >
          <label htmlFor="nameProduct" className="label-product p-t-0-5 p-l-0">
            name product *
            <input
              type="text"
              id="nameProduct"
              placeholder="enter name product"
              className={`input-product ${
                inputActive ? inputActive : "b-desactive"
              }`}
              onChange={e => setNamePorduct(e.target.value)}
              onClick={handleActive}
            />
          </label>
          <select
            name="select"
            className="select-product p-t-1-5 p-l-0"
            onChange={e => setCategoryId(e.target.value)}
          >
            <option value="0">select category</option>
            <option value="1">accesories</option>
            <option value="2">backpacks</option>
            <option value="3">audio</option>
            <option value="4">art</option>
          </select>
          <label htmlFor="priceProduct" className="price p-t-2-5-5 p-l-0">
            price *
            <input
              type="text"
              id="priceProduct"
              placeholder="0"
              onChange={e => setPrice(e.target.value)}
            />
          </label>
          <label htmlFor="quantity" className="quantity p-t-4 p-l-0">
            quantity *
            <input
              type="text"
              id="quantity"
              placeholder="0"
              onChange={e => {
                setQuantity(e.target.value);
              }}
            />
          </label>

          <label htmlFor="description" className="p-t-5-5-5 p-l-0">
            description *
            <textarea
              form="usrform"
              id="description"
              rows="5"
              className="description-product"
              onChange={e => setComments(e.target.value)}
            />
          </label>

          <button className="submit-product p-t-6-5 p-l-0">submit</button>
        </form>
        {price}
        {comments}
      </section>
    </div>
  );
};

export default UplodadProduct;
