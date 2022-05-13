import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import "./App.css";

function App() {
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
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactjsx" element={<ReactJSX />} />
        <Route path="/nodejs" element={<NodeJS />} />
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
