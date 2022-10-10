import React from "react";
import ReducerLinks from "../reducer/reducer";
import ActivaDataBase from "./ActivaDataBase";

const OutstandingLinks = () => {
  return (
    <section className="controller">
      <h1>Outstanding Links</h1>
      <ActivaDataBase dataName="Outstanding Links" />
      <ReducerLinks
        initialState={JSON.parse(
          localStorage.getItem("storageLinkOutstandingLinks")
        )}
        nameStorage={"storageLinkOutstandingLinks"}
        name={"Outstanding Links"}
      />
    </section>
  );
};

export default OutstandingLinks;
