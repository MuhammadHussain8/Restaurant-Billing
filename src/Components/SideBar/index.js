import React from "react";
import { Link } from "react-router-dom";
import { CiViewList, CiViewTable } from "react-icons/ci";
import Brand from "./../../assets/icons/logo.png";
import User from "./../../assets/icons/avatar.png";
import "./sideBar.css";

const Sidebar = () => {
  return (
    <div className="left-side-bar">
      <div className="brand">
        <img src={Brand} alt="logo" />
      </div>
      <ul className="nav-bar">
        <Link to="/">
          <li className="nav-bar-item">
            <CiViewTable size={30} />
            <span className="nav-title">Menu</span>
          </li>
        </Link>
        <Link to="orders">
          <li className="nav-bar-item">
            <CiViewList size={30} />
            <span className="nav-title">Orders</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
