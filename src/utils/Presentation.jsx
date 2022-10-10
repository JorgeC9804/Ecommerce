import React, { useEffect, useState, useRef } from "react";
import "./utils.styles.css";

const Presentation = () => {
  const [mouse, setMouse] = useState(false);
  const [mouseOffOne, setMouseOffOne] = useState(false);
  const [mouseOffTwo, setMouseOffTwo] = useState(false);
  const [mouseOffThree, setMouseOffThree] = useState(false);
  const [effect, setEffect] = useState(0);
  const chooseOneRef = useRef(null);
  const chooseTwoRef = useRef(null);
  const chooseThreeRef = useRef(null);
  const chooseFourRef = useRef(null);

  // console.log(users);

  const mouseOver = id => {
    setEffect(id);
    setMouse(true);

    switch (id) {
      case 1:
        setMouseOffOne(true);
        break;
      case 2:
        setMouseOffTwo(true);
        break;
      case 3:
        setMouseOffThree(true);
        break;
      default:
        return 0;
    }
  };

  const mouseOut = () => {
    setEffect(0);
  };

  const handleInside = () => {
    alert("activado");
  };

  useEffect(() => {
    chooseOneRef.current.addEventListener("mouseover", () => mouseOver(1));
    chooseOneRef.current.addEventListener("mouseout", mouseOut);

    chooseTwoRef.current.addEventListener("mouseover", () => mouseOver(2));
    chooseTwoRef.current.addEventListener("mouseout", mouseOut);

    chooseThreeRef.current.addEventListener("mouseover", () => mouseOver(3));
    chooseThreeRef.current.addEventListener("mouseout", mouseOut);

    chooseFourRef.current.addEventListener("mouseover", () => mouseOver(4));
    chooseFourRef.current.addEventListener("mouseout", mouseOut);
  }, [chooseOneRef, chooseTwoRef, chooseThreeRef, chooseFourRef]);

  return (
    <div className="choose center row">
      <div
        onClick={mouse ? handleInside : undefined}
        className={`cart p-10-t ${
          mouse && effect === 1
            ? "cart-1"
            : mouseOffOne
            ? "desactiveCartOne"
            : "p-10-l"
        }`}
        ref={chooseOneRef}
      >
        <div className="carts p-a-10">accesories</div>
        <div className="v-line"></div>
        <div className="circle c-a-p"></div>
      </div>
      <div
        className={`cart p-20-t ${
          mouse && effect === 2
            ? "cart-2"
            : mouseOffTwo
            ? "desactiveCartTwo"
            : "p-20-l"
        }`}
        ref={chooseTwoRef}
      >
        <div className="carts p-a-10">backpacks</div>
        <div className="v-line"></div>
        <div className="circle c-a-p"></div>
      </div>
      <div
        className={`cart p-30-t ${
          mouse && effect === 3
            ? "cart-3"
            : mouseOffThree
            ? "desactiveCartThree"
            : "p-30-l"
        }`}
        ref={chooseThreeRef}
      >
        <div className="carts p-a-20">audio</div>
        <div className="v-line"></div>
        <div className="circle c-a-p"></div>
      </div>
      <div className="cart p-40-l p-40-t" ref={chooseFourRef}>
        <div className="carts p-a-30">art</div>
        <div className="v-line">
          {/* <div>mas consultado</div>
          <div>mas comprado</div>
      <div>actualizaciones</div>*/}
        </div>
        <div className="circle c-a-p"></div>
      </div>
    </div>
  );
};

export default Presentation;
