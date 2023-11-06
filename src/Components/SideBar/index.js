import React from "react";
import { Link } from "react-router-dom";
import { CiReceipt, CiShoppingBasket, CiViewTable } from "react-icons/ci";
import Brand from "./../../assets/icons/logo.png";
import "./sideBar.css";

const Sidebar = () => {
  return (
    <div className="left-side-bar">
      <div className="brand">
        <img src={Brand} alt="logo" />
      </div>
      <ul className="nav-bar">
        <li className="nav-bar-item">
          <Link to="/menu" className="link">
            <CiViewTable size={33} />
          </Link>
        </li>
        <Link to="new-order">
          <li className="nav-bar-item">
            <CiShoppingBasket size={33} className="link" />
          </li>
        </Link>
        <Link to="orders">
          <li className="nav-bar-item">
            <CiReceipt size={33} className="link" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
