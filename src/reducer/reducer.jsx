import React, { useReducer, useEffect, useState } from "react";
import Form from "../utils/Form";
import Table from "../utils/tables";
import UpdateStateById from "../utils/UpdateStateById";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LINK":
      return (state = [
        ...state,
        {
          link: action.payload.link,
          linkName: action.payload.linkName,
          password: action.payload.password,
          id: action.payload.id,
        },
      ]);
    case "DELETE_LINK":
      return state.filter(element => element.id !== action.payload.id);

    case "UPDATE_LINK":
      return state;

    default:
      return state;
  }
};

const ReducerLinks = ({ initialState, nameStorage }) => {
  // React || NodeJs
  const [state, dispatch] = useReducer(reducer, initialState);
  const [link, setLink] = useState("");
  const [linkName, setLinkName] = useState("");
  const [password, setPassword] = useState("");
  const [repeated, setRepeated] = useState(false);
  const [updateLink, setUpdateLink] = useState(undefined);
  const [id, setId] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
  };

  const handleRepeated = () => {
    for (let i = 0; i < state.length; i++) {
      if (link === state[i].link) {
        return true;
      }
    }
    return false;
  };

  // add element
  const handleSubmitSet = () => {
    if (handleRepeated()) {
      setRepeated(<div>existing link</div>);
      setTimeout(() => {
        setRepeated("");
      }, 2000);
    } else {
      dispatch({
        type: "ADD_LINK",
        payload: { link, linkName, password, id },
      });
    }
  };

  // delete element
  const handleSubmitDelete = id => {
    dispatch({ type: "DELETE_LINK", payload: { id } });
  };

  // update element
  const handleSubmitUpdate = id => {
    setUpdateLink(
      <UpdateStateById
        setLink={setLink}
        setLinkName={setLinkName}
        setPassword={setPassword}
        link={link}
        handleSubmit={handleSubmit}
      />
    );
    dispatch({
      type: "UPDATE_LINK",
      payload: { link, linkName, password, id },
    }); /**/
  };

  useEffect(() => {
    localStorage.setItem(nameStorage, JSON.stringify(state));
    state.forEach(element => {
      setId(element.id + 1);
    });
  }, [initialState, nameStorage, state]);

  return (
    <div>
      <Form
        setLink={setLink}
        setLinkName={setLinkName}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        handleSubmitSet={handleSubmitSet}
      />
      {updateLink}
      {state && (
        <Table
          storageLinks={state}
          handleSubmitDelete={handleSubmitDelete}
          handleSubmitUpdate={handleSubmitUpdate}
        />
      )}
      {repeated}
    </div>
  );
};

export default ReducerLinks;
