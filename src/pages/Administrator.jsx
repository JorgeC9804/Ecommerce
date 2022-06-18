import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./pages.css/administrator.css";

const Administrator = () => {
  const [category, setCategory] = useState([]);
  const [nameCategory, setNameCategory] = useState("");
  const [createCategory, setCreateCategory] = useState(null);

  const handleActiveInter = () => {
    console.log("activate inter");
  };

  const handleCreateCategory = async e => {
    e.preventDefault();
    e.target.reset();

    const response = await axios.post(
      "http://localhost:3000/api/v1/categories",
      {
        nameCategory,
      }
    );
    setCreateCategory(response);
  };

  const handleGetAllCategories = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/categories");
    const { category } = response.data.data;
    setCategory(category);
  };

  useEffect(() => {
    handleGetAllCategories();
  }, [createCategory]);

  return (
    <section>
      <nav>
        <Link className="link-admin position-rel col-left-1" to="/reactjsx">
          React JSX
        </Link>
        <Link className="link-admin position-rel col-left-1" to="/nodejs">
          Node JS
        </Link>
        <Link
          className="link-admin position-rel col-left-1"
          to="/OutstandingLinks"
        >
          OutstandingLinks
        </Link>
      </nav>

      <section className="form-category">
        <form action="/" onSubmit={handleCreateCategory}>
          {category.length === 4 ? (
            <button className="activate" onClick={handleActiveInter}>
              enable data entry
            </button>
          ) : (
            <>
              <input
                placeholder="name category"
                onChange={e => setNameCategory(e.target.value)}
                className="add-category"
              />
              <button className="category">add category</button>
            </>
          )}
        </form>
        {category.map(element => (
          <div key={element.id} className="categories">
            {element.nameCategory}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Administrator;
