import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import '../assets/css/NavBar.css'
function NavBar() {
  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  updateCart(); // أول مرة

  window.addEventListener("cartUpdated", updateCart);

  return () => {
    window.removeEventListener("cartUpdated", updateCart);
  };
}, []);
  return (
    <nav className="navbar navbar-expand-lg t ">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand " to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav fs-5 mx-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{color:"#fc95c4"}}>
                Home
              </Link>
            </li>
          



            <li className="nav-item mx-3"><Link className="nav-link" to="/About">About</Link></li>
            <li className="nav-item mx-3"><Link className="nav-link" to="/Featured">Meanu</Link></li>
            <li className="nav-item mx-3"><Link className="nav-link" to="/Services">Services</Link></li>
            <li className="nav-item mx-3"><Link className="nav-link" to="/Blog">Blog</Link></li>
            <li className="nav-item mx-3"><Link className="nav-link" to="/Footer">ContactUs</Link></li>
          </ul>
        </div>
      
<Link to="/cart" className="cart-icon">
  🛒 {cartCount}
</Link>
      </div>
    </nav>
  );
}

export default NavBar;

