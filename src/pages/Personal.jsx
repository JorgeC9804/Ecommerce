import React from "react";
import { Link } from "react-router-dom";

const Personal = () => {
  return (
    <section>
      <nav>
        <Link className="link" to="/reactjsx">
          React JSX
        </Link>
        <Link className="link" to="/nodejs">
          Node JS
        </Link>
      </nav>
    </section>
  );
};

export default Personal;
