import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCloudLightning } from "react-icons/bs";
import { AiOutlineFileZip } from "react-icons/ai";
import CreateAccount from "../session/CreateAccount";
import Presentation from "../utils/Presentation";
import Login from "../session/Login";

import Products from "../products/Products";
import "./pages.css/pages.styles.css";
import "./pages.css/principalTwo.styles.css";
import "./pages.css/position.style.css";

const Home = ({ userInfo }) => {
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(true);

  const handleChangeSignInUP = signInUp => {
    switch (signInUp) {
      case "signIn":
        setSign(true);
        break;
      case "signUp":
        setSign(false);
        break;
      default:
        return signInUp;
    }
  };

  const YourAss = () => {};

  const handleValidateSesion = () => {
    if (JSON.parse(localStorage.getItem("login"))) {
      setLogin(true);
    } else setLogin(false);
  };

  useEffect(() => {
    handleValidateSesion();
  }, [login]);

  return (
    <div>
      <section className="principal">
        <h3>TARS</h3>
        <div className="row">
          <section className="presentation">
            <Presentation />
          </section>
          {login ? (
            <div className="create-sale center-h column">
              <div className="title center">create and sell your product</div>
              <div className="box-sell">
                <div className="intro-small p-l-0 center">
                  it's very easy to create and upload
                </div>
                <div className="intro-GIF p-t-2 p-l-10 center-h column">
                  <BsCloudLightning className="icon-cloud" />
                  <AiOutlineFileZip className="icon-file" />
                </div>
              </div>
              <Link to="/upload-product" className="create-product center">
                create product
              </Link>
            </div>
          ) : (
            <div className="session">
              <section className="submit-session">
                <input
                  type="submit"
                  value="sign in"
                  className={`session-sign-up-in ${sign ? "blue" : ""}`}
                  onClick={() => handleChangeSignInUP("signIn")}
                />
                <input
                  type="submit"
                  value="sign up"
                  className={`session-sign-up-in ${sign ? "" : "blue"}`}
                  onClick={() => handleChangeSignInUP("signUp")}
                />
              </section>
              {sign ? (
                <Login setLogin={setLogin} />
              ) : (
                <CreateAccount setLogin={setLogin} />
              )}
            </div>
          )}
        </div>
      </section>
      <section className="principalTwo center-h">
        <Products userInfo={userInfo} />
      </section>
      <div style={{ zIndex: "10" }}></div>
    </div>
  );
};

export default Home;
