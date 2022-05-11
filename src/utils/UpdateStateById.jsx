import React from "react";

const UpdateStateById = ({
  setLink,
  setLinkName,
  setPassword,
  link,
  linkName,
  handleSubmit,
}) => {
  return (
    <form action="/" onSubmit={handleSubmit}>
      <label htmlFor="link">
        link
        <input
          type="text"
          id="link"
          name="link"
          defaultValue={link}
          onChange={e => setLink(e.target.value)}
        />
      </label>

      <label>link name</label>
      <input
        type="text"
        id="linkName"
        name="linkName"
        defaultValue={linkName}
        onChange={e => setLinkName(e.target.value)}
      />

      <label>password</label>
      <input onChange={e => setPassword(e.target.value)} />

      <button>update</button>
    </form>
  );
};

export default UpdateStateById;
