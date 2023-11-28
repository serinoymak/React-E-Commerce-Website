import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Wishlist from "./Components/Wishlist";
import Login from "./Components/Login";
import Cart from "./Components/Cart";


function App() {
  return (
    <>
      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </div>
    </>
  );
}
export default App;
