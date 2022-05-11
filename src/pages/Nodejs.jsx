import React from "react";
import ReducerLinks from "../reducer/reducer";

const NodeJS = () => {
  return (
    <section>
      <h1>Node JS</h1>
      <ReducerLinks
        initialState={JSON.parse(localStorage.getItem("storageLinkNodejs"))}
        nameStorage="storageLinkNodejs"
      />
    </section>
  );
};

export default NodeJS;
