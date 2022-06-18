import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FaUncharted, FaUserAlt } from "react-icons/fa";
import { BsPinAngle, BsPinAngleFill, BsCloudUpload } from "react-icons/bs";
import { MdSell, MdAudiotrack, MdBackpack, MdWallpaper } from "react-icons/md";
import { CgPathIntersect } from "react-icons/cg";
import "./header.styles.css";

const Header = ({ administrator, create }) => {
  const [mouse, setMouse] = useState(false);
  const [headerStatic, setHeaderStatic] = useState(false);
  const [adminT, setAdminT] = useState(false);
  const [userT, setUserT] = useState(false);
  const headerRef = useRef(null);

  const { admin, user } = useSelector(state => state.login);

  const handleHeaderStatic = () => {
    setHeaderStatic(!headerStatic);
  };
  const handleSignOff = () => {
    localStorage.setItem("login", JSON.stringify(""));
  };

  const mouseOver = () => {
    setMouse(true);
  };
  const mouseOut = () => {
    setMouse(false);
  };

  useEffect(() => {
    if (admin) {
      setAdminT(true);
    } else if (user) {
      setUserT(true);
    } else if (administrator) {
      administrator === "user" ? setUserT(true) : setAdminT(true);
    }
  }, [admin, user, administrator]);

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
          {adminT ? (
            <Link
              className={`link ${mouse ? "information" : undefined}`}
              to="/administrator"
            >
              {headerStatic ? <>admin</> : mouse ? <>admin</> : <GrUserAdmin />}
            </Link>
          ) : (
            <></>
          )}
          {userT ? (
            <Link
              to="/profile"
              className={`link ${mouse ? "information" : undefined}`}
            >
              {headerStatic ? (
                <>profile</>
              ) : mouse ? (
                <>profile</>
              ) : (
                <FaUserAlt />
              )}
            </Link>
          ) : (
            <></>
          )}
          {create ? (
            <Link
              to="/upload-product"
              className={`link ${mouse ? "information" : undefined}`}
            >
              {headerStatic ? (
                <>upload</>
              ) : mouse ? (
                <>upload</>
              ) : (
                <BsCloudUpload />
              )}
            </Link>
          ) : (
            <></>
          )}
          <button
            className={`link ${mouse ? "information" : undefined}`}
            onClick={handleSignOff}
          >
            {headerStatic ? (
              <>sign off</>
            ) : mouse ? (
              <>sign off</>
            ) : (
              <AiOutlinePoweroff />
            )}
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Header;
