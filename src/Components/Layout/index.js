import React from "react";
import Header from "../Header";
import Sidebar from "../SideBar";
import "./layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="left-content">
        <Sidebar />
      </div>
      <div className="right-content">
        <Header />
        <div className="chilred">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
