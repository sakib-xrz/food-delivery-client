import React from "react";
import "./Cart.css";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    // <div className="no-cart">
    //   <h2 className="no-cart-heading">No Item Added</h2>
    //   <p>Please add some food</p>
    //   <Link to={"/menu"}>
    //     <button className="back-homepage">Back to shop</button>
    //   </Link>
    // </div>

    <div className="cart-parent">
      <div className="cart-box">
        <div className="cart">
          <h2>Your cart</h2>
          <ul>
            <li className="cart-list">
              <div className="cart-main">
                <div className="img-col">
                  <img src="https://i.ibb.co/vD1Qq1N/BBQ-Chicken.jpg" alt="" />
                </div>
                <div className="content-column">
                  <div className="cart-content-main">
                    <div className="cart-title">
                      <h3 className="name-price">BBQ Chicken</h3>
                      <p>Quantity : 1</p>
                    </div>
                    <div className="cart-price">
                      <h3 className="name-price">389 ৳</h3>
                      <p>389 ৳</p>
                    </div>
                  </div>
                  <div className="remove-button-div">
                    <button type="button" className="remove-button">
                      <ImBin className="delete-btn-icon" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="subtotal-div">
            <h3 className="subtotal">
              Total amount: &nbsp;
              <span>357 ৳</span>
            </h3>
          </div>
          <div className="total-btn-div">
            <Link to={"/menu"}>
              <button className="shop-button" type="button">
                Back to shop
              </button>
            </Link>
            <button className="order-button" type="button">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
