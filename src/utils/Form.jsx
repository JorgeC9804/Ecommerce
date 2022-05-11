import React from "react";

const Form = ({
  setLink,
  setLinkName,
  setPassword,
  handleSubmit,
  handleSubmitSet,
}) => {
  return (
    <form action="/" onSubmit={handleSubmit}>
      <label>Link</label>
      <input type="text" onChange={e => setLink(e.target.value)} />

      <label>Link Name</label>
      <input type="text" onChange={e => setLinkName(e.target.value)} />

      <label>Password</label>
      <input type="text" onChange={e => setPassword(e.target.value)} />

      <button onClick={handleSubmitSet}>send</button>
    </form>
  );
};

export default Form;
