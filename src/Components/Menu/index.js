import React from "react";
import Piza from "./../../assets/images/piza.jpg";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import "./menu.css";

const Menu = () => {
  return (
    <div className="card-container">
      <div className="menu-card">
        <div className="image-container">
          <img src={Piza} alt="menu image" />
          <CiHeart size={25} className="heart" />
        </div>
        <div className="details">
          <div className="name-price">
            <p className="menu-name">Chicken Menchurian</p>
            <p className="menu-price">Rs550</p>
          </div>
        </div>
        <p className="desc">with Onion, cheese, Olive and many more</p>
        <div className="rating-btn">
          <span className="rating">
            <FaStar size={15} color="#fdcc0d" className="star" />
            5.0
          </span>
          <button className="edit-btn">Edit</button>
        </div>
      </div>
      <div className="menu-card">
        <div className="image-container">
          <img src={Piza} alt="menu image" />
          <CiHeart size={25} className="heart" />
        </div>
        <div className="details">
          <div className="name-price">
            <p className="menu-name">Chicken Menchurian</p>
            <p className="menu-price">Rs550</p>
          </div>
        </div>
        <p className="desc">with Onion, cheese, Olive and many more</p>
        <div className="rating-btn">
          <span className="rating">
            <FaStar size={15} color="#fdcc0d" className="star" />
            5.0
          </span>
          <button className="edit-btn">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
