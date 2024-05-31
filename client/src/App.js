import React from "react";
import "./App.css";
import foodData2 from "./foodData2.json";
import Signup from "./screens/Signup.js";
import Login from "./screens/Login.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/ContextReducer.js";
import Home from "./screens/Home.js";
import { ModalProvider } from "./components/ModalContext.js";
function App() {
  const data = foodData2;
  return (
    <div>
      <ModalProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home></Home>}></Route>
              <Route exact path="/createuser" element={<Signup />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
            </Routes>
          </Router>
        </CartProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
