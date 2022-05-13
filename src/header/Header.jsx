import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import Personal from "../pages/Personal";
import { FaUncharted } from "react-icons/fa";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { MdSell, MdAudiotrack, MdBackpack, MdWallpaper } from "react-icons/md";
import { CgPathIntersect } from "react-icons/cg";
import "./header.styles.css";

const Header = () => {
  // const [personal, setPersonal] = useState(false);
  const [mouse, setMouse] = useState(false);
  const [headerStatic, setHeaderStatic] = useState(false);
  const headerRef = useRef(null);
  // const navigate = useNavigate();

  /*const handlePersonal = () => {
    setPersonal(!personal);
    if (personal) {
      navigate("/");
    }
  };*/

  const handleHeaderStatic = () => {
    setHeaderStatic(!headerStatic);
  };

  const mouseOver = () => {
    setMouse(true);
  };
  const mouseOut = () => {
    setMouse(false);
  };

  useEffect(() => {
    headerRef.current.addEventListener("mouseover", mouseOver);
    headerRef.current.addEventListener("mouseout", mouseOut);
  }, []);

  return (
    <section
      ref={headerRef}
      className={headerStatic ? "headerStatic" : "header"}
    >
      <div>
        {/*<button onClick={handlePersonal}>personal</button>*/}
        <button className="header-static-icon" onClick={handleHeaderStatic}>
          {headerStatic ? <BsPinAngleFill /> : <BsPinAngle />}
        </button>
        <nav className="">
          <div className="icon">
            <Link
              className={
                headerStatic ? "icon center" : mouse ? "icon center" : "none"
              }
              to="/"
            >
              <div className="circle-icon information"></div>
            </Link>
          </div>
          <Link
            className={`link ${mouse ? "information" : undefined}`}
            to="/most-sold"
          >
            {headerStatic ? (
              <>most sold</>
            ) : mouse ? (
              <>most sold</>
            ) : (
              <MdSell />
            )}
          </Link>
          <Link
            className={`link ${mouse ? "information" : undefined}`}
            to="/accesories"
          >
            {headerStatic ? (
              <>accesories</>
            ) : mouse ? (
              <>accesories</>
            ) : (
              <CgPathIntersect />
            )}
          </Link>
          <Link
            className={`link ${mouse ? "information" : undefined}`}
            to="/audio"
          >
            {headerStatic ? (
              <>accesories</>
            ) : mouse ? (
              <>audio</>
            ) : (
              <MdAudiotrack />
            )}
          </Link>
          <Link
            className={`link ${mouse ? "information" : undefined}`}
            to="/backpacks"
          >
            {headerStatic ? (
              <>backpacks</>
            ) : mouse ? (
              <>backpacks</>
            ) : (
              <MdBackpack />
            )}
          </Link>
          <Link
            className={`link ${mouse ? "information" : undefined}`}
            to="/art"
          >
            {headerStatic ? <>art</> : mouse ? <>art</> : <FaUncharted />}
          </Link>
          <Link
            className={`link ${mouse ? "information" : undefined}`}
            to="/wallpaper"
          >
            {headerStatic ? (
              <>wallpaper</>
            ) : mouse ? (
              <>wallpaper</>
            ) : (
              <MdWallpaper />
            )}
          </Link>
        </nav>
      </div>

      {/* personal ? <Personal /> : ""*/}
    </section>
  );
};

export default Header;
