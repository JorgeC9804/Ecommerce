import React from "react";
import ReducerLinks from "../reducer/reducer";

const ReactJSX = () => {
  return (
    <section>
      <h1>React JSX</h1>
      <ReducerLinks
        initialState={JSON.parse(localStorage.getItem("storageLinkReact"))}
        nameStorage={"storageLinkReact"}
      />
    </section>
  );
};

export default ReactJSX;
