import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiReceipt, CiShoppingBasket, CiViewTable } from "react-icons/ci";
import Brand from "./../../assets/icons/logo.png";
import "./sideBar.css";

const Sidebar = () => {
  const location = useLocation()
  const [path, setPath] = useState(location?.pathname)

  useEffect(() => {
    setPath(location?.pathname)
  }, [location?.pathname])


  return (
    <div className="left-side-bar">
      <div className="brand">
        <img src={Brand} alt="logo" />
      </div>
      <ul className="nav-bar">
        <li className="nav-bar-item">
          <Link to="/menu" className="link">
            <CiViewTable size={33} color={path === "/menu" ? "#55a077" : "#000"} />
          </Link>
        </li>
        <Link to="new-order">
          <li className="nav-bar-item">
            <CiShoppingBasket size={33} className="link" color={path === "/new-order" ? "#55a077" : "#000"} />
          </li>
        </Link>
        <Link to="orders" >
          <li className="nav-bar-item">
            <CiReceipt size={33} className="link" color={path === "/orders" ? "#55a077" : "#000"} />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
