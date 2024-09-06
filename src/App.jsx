import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import './App.css'
import './i18n'
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
    <Toaster 
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          background: "rgb(1, 21, 17)",
          color: "#fff",
        },
      }}
    />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/language" element={<h1>Language</h1>} />
          <Route path="/service" element={<h1>Service</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
