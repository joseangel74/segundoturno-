import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componentes/Home";
import Dashboard from "./componentes/Dashboard";
import About from "./componentes/About";

function Rutas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default Rutas;