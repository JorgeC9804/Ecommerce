import React, { useState } from "react";

const Login = () => {
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
      e.target.reset();
      setEmail("");
      setPassword("");
      setEmailVoid("");
      setPasswordVoid("");
    }
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
