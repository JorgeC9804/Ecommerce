import React from "react";
import ReducerLinks from "../reducer/reducer";

const OutstandingLinks = () => {
  return (
    <section>
      <h1>Outstanding Links</h1>
      <ReducerLinks
        initialState={JSON.parse(
          localStorage.getItem("storageLinkOutstandingLinks")
        )}
        nameStorage={"storageLinkOutstandingLinks"}
      />
    </section>
  );
};

export default OutstandingLinks;
