import React from "react";
import ReducerLinks from "../reducer/reducer";

const ReactJSX = () => {
  // se ejecuta despues de montar componente

  /**
   * primero se monta el componente, se ejecuta el componente
   * ReducerLinks, enseguida se monta Form al igual que Table.
   * si Table se trata de ejecutar un map undefined, lo que genera un
   * error
   */

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
