import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Login = ({ setLogin }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [emailVoid, setEmailVoid] = useState("");
  const [passwordVoid, setPasswordVoid] = useState("");

  const handleSignIn = e => {
    e.preventDefault();

    if (!email || !password) {
      if (!email) {
        setEmailVoid("error");
      }
      if (!password) {
        setPasswordVoid("error");
      }
    } else {
      LoginUser();
    }
  };

  // log in
  const LoginUser = async () => {
    try {
      const response = await axios.post(
        "https://ecommerce-nodejs-jorge.herokuapp.com/api/v1/users/api/v1/users/login",
        {
          email,
          password,
        }
      );
      /**
       * la informacion del usurio debe ser almacenada en un redux
       */
      const { user } = response.data.data;
      handleResponseApi(user);
      handleAuthorization(user);
      localStorage.setItem("login", JSON.stringify(response));
      dispatch({ type: "USER_INFO", payload: { user } });
    } catch (error) {
      handleResponseApi(undefined);
    }
  };

  const handleResponseApi = response => {
    if (response) {
      handleResetInformation();
    } else {
      setEmail("");
      setPassword("");
      setEmailVoid("error");
      setPasswordVoid("error");
    }
  };
  /**
   * al momento de recargar la pagina, esta inicia todos sus componentes, incluyendo
   * la informacion incluida en Redux, esto provoca que al momento de ingresar la palabra administrator
   * por medio de la url, se recargue la pagina y reinicie estos componentes.
   *
   * lo que se tiene que hacer, es mandar esta informacion guardada
   */

  const handleAuthorization = Authorization => {
    if (Authorization.admin === "admin") {
      dispatch({ type: "ADMIN", payload: { admin: true } });
    } else if (Authorization.admin === "user") {
      dispatch({ type: "USER", payload: { user: true } });
    }
  };

  const handleResetInformation = () => {
    setLogin(true);
    setEmail("");
    setPassword("");
    setEmailVoid("");
    setPasswordVoid("");
  };

  return (
    <form action="/" onSubmit={handleSignIn} className="column center">
      <label htmlFor="email" className="first-label">
        email *
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter email"
          className={`input ${
            email ? "shadow-active" : emailVoid ? emailVoid : "shadow-desactive"
          }`}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        password *
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="enter password"
          className={`input ${
            password
              ? "shadow-active"
              : passwordVoid
              ? passwordVoid
              : "shadow-desactive"
          }`}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button className="sign">sign in</button>
    </form>
  );
};

export default Login;
