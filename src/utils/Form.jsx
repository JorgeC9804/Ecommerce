import React from "react";

const Form = ({
  name,
  setLink,
  setLinkName,
  setPassword,
  handleSubmit,
  handleSubmitSet,
}) => {
  // ---------------------------------------------------------------
  /*
  const handlGetLinksLocalStorage = () => {
    const response = JSON.parse(
      localStorage.getItem("storageLinkOutstandingLinks")
    );

    const reactjsx = JSON.parse(localStorage.getItem("storageLinkReact"));

    const nodejs = JSON.parse(localStorage.getItem("storageLinkNodejs"));

    response.forEach(element => {
      handleAddDataBase(
        "Outstanding Links",
        element.link,
        element.linkName,
        element.password
      );
    });

    reactjsx.forEach(element => {
      handleAddDataBase(
        "reactjsx Links",
        element.link,
        element.linkName,
        element.password
      );
    });

    nodejs.forEach(element => {
      handleAddDataBase(
        "nodejs Links",
        element.link,
        element.linkName,
        element.password
      );
    });

    console.log(response);
    console.log(reactjsx);
    console.log(nodejs);
  };

  const handleAddDataBase = async (category, link, linkname, password) => {
    const response = await axios.post("http://localhost:3000/api/v1/links", {
      link,
      category,
      linkname,
      password,
    });

    console.log(response);
  };
*/
  // ---------------------------------------------------------------

  return (
    <>
      <form action="/" onSubmit={handleSubmit}>
        <label>Link</label>
        <input type="text" onChange={e => setLink(e.target.value)} />

        <label>Link Name</label>
        <input type="text" onChange={e => setLinkName(e.target.value)} />

        <label>Password</label>
        <input type="text" onChange={e => setPassword(e.target.value)} />

        <button onClick={handleSubmitSet}>send</button>
      </form>
    </>
  );
};

export default Form;
