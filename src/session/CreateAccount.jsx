import React, { useState } from "react";
import { useSelector } from "react-redux";
// import io from "socket.io-client";
import axios from "axios";

const CreateAccount = ({ setSign }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [nameVoid, setNameVoid] = useState("");
  const [emailVoid, setEmailVoid] = useState("");
  const [userVoid, setUserVoid] = useState("");
  const [passwordVoid, setPasswordVoid] = useState("");

  const pepe = useSelector(state => state);

  // const socket = io.connect("http://localhost:3000");

  // const users = useSelector(state => state.users);

  const handleSignUp = async e => {
    e.preventDefault();

    if (!name || !email || !username || !password) {
      if (!name) {
        setNameVoid("error");
      }
      if (!email) {
        setEmailVoid("error");
      }
      if (!username) {
        setUserVoid("error");
      }
      if (!password) {
        setPasswordVoid("error");
      }
    } else {
      e.target.reset();
      CreateUser();
      setSign(true);
      // dispatch({ type: "ADD_USER", id, name, email, username, password });
      handleResetInformation();
      /* socket.emit("send_message", {
        message: `hey ${name}`,
      }); */
    }
  };

  const handleResetInformation = () => {
    setName("");
    setEmail("");
    setUser("");
    setPassword("");
    setNameVoid("");
    setEmailVoid("");
    setUserVoid("");
    setPasswordVoid("");
  };

  const CreateUser = async () => {
    /**
     * la base de mi operacion radica al momento de hacer log in.
     * al momento de hacer log in, se manda la busqueda dentro de la
     * base de datos
     */
    const response = await axios.post("http://localhost:3000/api/v1/users", {
      name,
      email,
      username,
      password,
    });

    console.log(response);
  };

  /*useEffect(() => {
    socket.on("receive_message", data => {
      console.log(
        "mandando informacion mediante el mismo servidor, diferentes partes"
      );
    }); 
  }, [socket]); */

  /*useEffect(() => {
    delete useEffect
    /*const UsersData = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/users");
      const { data } = response.data;
      console.log("server");
      console.log(data);
      setId(data.length);
    };

    console.log("redux");
    console.log(users);
    UsersData();
  }, [users]);
*/

  return (
    <form action="/" onSubmit={handleSignUp} className="column center">
      <label htmlFor="name" className="first-label">
        name *
        <br />
        <input
          type="name"
          id="name"
          name="name"
          placeholder="enter name"
          className={`input ${
            name ? "shadow-active" : nameVoid ? nameVoid : "shadow-desactive"
          }`}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email">
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
      <label htmlFor="userName">
        user name *
        <br />
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="enter user-name"
          className={`input ${
            username
              ? "shadow-active"
              : userVoid
              ? userVoid
              : "shadow-desactive"
          }`}
          onChange={e => setUser(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        password *
        <br />
        <input
          type="password"
          id="password"
          name="passwrod"
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
      <button className="sign">sign up</button>
    </form>
  );
};

export default CreateAccount;
