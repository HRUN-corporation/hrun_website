import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./responsive.css";

import "./App.css";
import Navbar from "./сomponents/navbar/Navbar";
import Home from "./Pages/Home/Home.js";
import Footer from "./сomponents/footer/Footer";
import Service from "./Pages/ServicePage/Service";
import About from "./Pages/About/About";
import Works from "./Pages/Works/Works";

function App() {


  return (
    <Router>
      <div>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Works />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
