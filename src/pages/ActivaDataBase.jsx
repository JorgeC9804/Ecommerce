import React, { useEffect, useState } from "react";
import axios from "axios";

const ActivaDataBase = ({ dataName }) => {
  const [active, setActive] = useState(false);
  const [dataBase, setDataBase] = useState([]);
  //   const dataBase = [];

  const handleActive = async () => {
    const res = await axios.get("http://localhost:3000/api/v1/links");
    const { data } = res.data;
    console.log(data);

    setDataBase(state => {
      data.forEach(element => {
        if (element.category === dataName) {
          state = [...state, element];
          console.log(state);
        }
      });
      return state;
    });
  };

  useEffect(() => {
    const handleAnalyzeLocalStorage = () => {
      /** */
      const response = JSON.parse(
        localStorage.getItem("storageLinkOutstandingLinks")
      );

      console.log(response);

      if (response.length !== 0) {
        setActive(false);
      } else {
        setActive(true);
      }
    };

    handleAnalyzeLocalStorage();
  }, [dataName, dataBase]);

  useEffect(() => {
    // if (dataBase.length === 0) {
    localStorage.setItem(
      "storageLinkOutstandingLinks",
      JSON.stringify(dataBase)
    );
    // }
  }, [dataBase]);

  return (
    <>
      {active ? (
        <div>
          Void Local Storage
          <button onClick={handleActive}>Active</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ActivaDataBase;
