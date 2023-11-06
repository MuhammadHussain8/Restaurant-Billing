import React, { useEffect, useState } from "react";
import Piza from "./../../assets/images/piza.jpg";
import { CiHeart } from "react-icons/ci";
import {
  FaStar,
  FaTrash,
  FaRegPlusSquare,
  FaRegMinusSquare,
} from "react-icons/fa";
import "./menu.css";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const [orderPage, setOrderPage] = useState(false);
  const [isNewOrder, setIsNewOrder] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname == "/new-order") {
      setOrderPage(true);
    } else {
      setOrderPage(false);
    }
  }, [location?.pathname]);

  return (
    <div className="menu-container">
      <div className="card-container-header">
        <p>{orderPage ? "Add Foods to Cart" : "Find The Best Food"} </p>
        {
          orderPage ?
            !isNewOrder ? <p className="add-new" onClick={() => { setIsNewOrder(true) }}>New Order</p> : null
            :
            <p className="add-new">Add Dish</p>
        }
      </div>
      <div className="card-container">
        <div className="menu-card">
          <div className="image-container">
            <img src={Piza} alt="menu image" />
            <CiHeart size={25} className="heart" />
          </div>
          <div className="details">
            <div className="name-price">
              <p className="menu-name">Chicken Menchurian</p>
              <p className="menu-price">550</p>
            </div>
          </div>
          <p className="desc">with Onion, cheese, Olive and many more</p>
          <div className="rating-btn">
            <span className="rating">
              <FaStar size={15} color="#fdcc0d" className="star" />
              5.0
            </span>
            {orderPage ? (
              <button className="edit-btn">Add</button>
            ) : (
              <button className="edit-btn">Edit</button>
            )}
          </div>
        </div>
      </div>
      {
        isNewOrder ?
          <div className="order-list">
            <p className="new-order-text">New Order</p>
            <span className="cross" onClick={() => setIsNewOrder(false)}>
              X
            </span>
            <div className="order-cart-container">
              <div className="order-cart">
                <div className="order-img">
                  <img src={Piza} alt="food" />
                </div>
                <div className="order-details">
                  <FaTrash size={12} className="delete" />
                  <span className="counter">
                    <FaRegPlusSquare size={18} className="counter-icon" />
                    <p>01</p>
                    <FaRegMinusSquare size={18} className="counter-icon" />
                  </span>
                  <p className="order-title">Chicken Noodle Soup</p>
                  <p className="order-desc">Small Bowl</p>
                  <div className="price-quantity">
                    <p>Rs. 50</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Pricing-details">
              <table>
                <tr>
                  <th>Items</th>
                  <th>Price</th>
                </tr>
                <tr className="derails-row">
                  <td className="item-name">Centro comercial Moctezuma</td>
                  <td className="item-price">1450</td>
                </tr>
                <tr className="derails-row">
                  <td className="item-name">Centro comercial Moctezuma</td>
                  <td className="item-price">1450</td>
                </tr>
                <tr className="derails-row">
                  <td className="item-name">Centro comercial Moctezuma</td>
                  <td className="item-price">1450</td>
                </tr>
                <hr></hr>
                <tr className="derails-row">
                  <td className="total-price-title">Total Amount</td>
                  <td className="total-price-amount">1450</td>
                </tr>
              </table>
            </div>
          </div> : null
      }

    </div>
  );
};

export default Menu;
