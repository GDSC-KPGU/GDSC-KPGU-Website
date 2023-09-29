import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Dark from "./page/Dark";
import Footer from "./componets/common/Footer";

export default function App() {
  return (
    <div className="w-screen min-h-screen h-sceeen  flex flex-col font-inter">

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
  );
}
