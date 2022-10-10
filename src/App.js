import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Header from "./header/Header";
import ReactJSX from "./pages/React";
import NodeJS from "./pages/Nodejs";
import MostSold from "./pages/MostSold";
import Accesories from "./pages/Accesories";
import Audio from "./pages/Audio";
import Backpacks from "./pages/Backpacks";
import Wallpaper from "./pages/Wallpaper";
import Art from "./pages/Art";
import Search from "./utils/Search";
import OutstandingLinks from "./pages/OutstandingLinks";
import Administrator from "./pages/Administrator";
import UplodadProduct from "./pages/UploadProduct";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const login = JSON.parse(localStorage.getItem("login"));
  const [general, setGeneral] = useState(login ? true : false);
  const [userInfo, setUserInfo] = useState([]);
  const { admin, user } = useSelector(state => state.login);
  const [administrator, setAdmin] = useState(
    login ? login.data.data.user.admin : ""
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login"));
    setUserInfo(login ? login.data.data.user : "");
    // console.log("debo ser nivel 1");
    setAdmin(login ? login.data.data.user.admin : "");
    setGeneral(login ? true : false);
    if (login) {
      const { token } = login.data;
      dispatch({ type: "TOKEN", payload: { token } });
      // console.log(token);
    }
  }, [admin, user, dispatch]);

  useEffect(() => {
    if (
      !JSON.parse(localStorage.getItem("storageLinkNodejs")) ||
      !JSON.parse(localStorage.getItem("storageLinkReact")) ||
      !JSON.parse(localStorage.getItem("storageLinkOutstandingLinks"))
    ) {
      localStorage.setItem("storageLinkReact", JSON.stringify([]));
      localStorage.setItem("storageLinkNodejs", JSON.stringify([]));
      localStorage.setItem("storageLinkOutstandingLinks", JSON.stringify([]));
    }
  }, []);

  return (
    <BrowserRouter>
      <Header administrator={administrator} general={general} />
      <Search />
      <Routes>
        <Route
          path="/"
          element={<Home userInfo={userInfo} general={general} log={login} />}
        />
        <Route
          path="/administrator"
          element={
            administrator === "admin" ? (
              <Administrator />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            administrator === "user" || administrator === "admin" ? (
              <Profile />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/upload-product"
          element={
            general ? (
              <UplodadProduct login={login} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/reactjsx"
          element={
            administrator === "admin" ? (
              <ReactJSX />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/nodejs"
          element={
            administrator === "admin" ? <NodeJS /> : <Navigate replace to="/" />
          }
        />
        <Route path="/OutstandingLinks" element={<OutstandingLinks />} />
        <Route path="/most-sold" element={<MostSold />} />
        <Route path="/accesories" element={<Accesories />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/backpacks" element={<Backpacks />} />
        <Route path="/art" element={<Art />} />
        <Route path="/wallpaper" element={<Wallpaper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
