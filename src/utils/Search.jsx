import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./utils.styles.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
  };

  const handleSearch = () => {
    if (search === "audio") {
      navigate("/audio");
    }
  };

  return (
    <form action="/" onSubmit={handleSubmit}>
      <button className="icon-search center" onClick={handleSearch}>
        <BsSearch className="icon-s" />
      </button>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          name="search"
          className="principal-search"
          onChange={e => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Search;
