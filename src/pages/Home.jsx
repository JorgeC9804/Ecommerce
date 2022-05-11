import React, { useState } from "react";
import CreateAccount from "../session/CreateAccount";
import Presentation from "../utils/Presentation";
import Login from "../session/Login";
import "./pages.styles.css";
import "./principalTwo.styles.css";

const Home = () => {
  // const [login, setLogin] = useState(false);
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

  return (
    <div>
      <section className="principal">
        <h3>TARS</h3>
        <div className="row">
          <section className="presentation">
            <Presentation />
          </section>
          {false ? (
            <div className="create-sale">
              products sale
              <br />
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
              {sign ? <Login /> : <CreateAccount />}
            </div>
          )}
        </div>
      </section>
      <div className="principalTwo">
        <div className="test"></div>
      </div>
      <div style={{ zIndex: "10" }}></div>
    </div>
  );
};

export default Home;
