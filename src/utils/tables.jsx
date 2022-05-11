import React from "react";

const Table = ({ storageLinks, handleSubmitDelete, handleSubmitUpdate }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Link</th>
          <th>Password</th>
        </tr>
      </thead>

      {storageLinks &&
        storageLinks.map(({ link, linkName, password, id }) => (
          <tbody key={id}>
            {
              <>
                <tr>
                  <td>
                    <a href={link} target="_blank">
                      {linkName}
                    </a>
                  </td>
                  <td>{password}</td>
                  <td className="btn-s">
                    <button
                      className="btn delete"
                      onClick={() => handleSubmitDelete(id)}
                    >
                      delete
                    </button>
                    <button
                      className="btn update"
                      onClick={() => handleSubmitUpdate(id)}
                    >
                      update
                    </button>
                  </td>
                </tr>
              </>
            }
          </tbody>
        ))}
    </table>
  );
};

export default Table;
