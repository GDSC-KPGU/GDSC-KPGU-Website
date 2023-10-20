import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import HomePage from "./page/HomePage";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import "./App.css"
export const ThemeContext = createContext(null);

export default function App() {
  const [darkmode, setDarkmode] = useState("light"); // Initialize darkmode state

  const toggleTheme = () => {
    // Use a ternary operator to toggle between light and dark themes
    setDarkmode((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ darkmode, toggleTheme }}>
    <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
