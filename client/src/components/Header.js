import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useModal } from './ModalContext';

import swiggy from "../Swiggy.png";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  const { openModal } = useModal();
  return (
    <div className="header">
      <img src={swiggy} alt="" />
      <ul className="header-ul">
        <li>
          <Link to="/" className="link-class">
            Home
          </Link>
          {localStorage.getItem("authToken") ? (
            <Link to="/" className="link-class">
              My Orders
            </Link>
          ) : null}
        </li>
      </ul>
      <div className="link-header">
        {!localStorage.getItem("authToken") ? (
          <>
            <Link className="link-class" to="/login">
              Login
            </Link>
            <Link to="/createuser" className="link-class">
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link to="" className="link-class" onClick={openModal}>
              MyCart
            </Link>
            <Link onClick={handleLogout} className="link-class">
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
