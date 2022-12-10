import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App Site">
        <div className="Site-content">
          <Navbar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>

    </Router>
  );
}
export default App;
