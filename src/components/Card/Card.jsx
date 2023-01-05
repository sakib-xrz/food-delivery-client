import React from 'react';
import "./Card.css"
import rating from "../../assets/images/star.png"

const Card = () => {
    return (
      <div className="card-main">
        <div>
          <div className="card-img">
            <img src="https://i.ibb.co/vD1Qq1N/BBQ-Chicken.jpg" alt="" />{" "}
            <h4 className="category">pizza</h4>
          </div>
          <div className="card-content">
            <h3>BBQ Chicken - HC</h3>
            <p>BBQ Chicken, Green Chilies, sweet Corn</p>
            <div className="price-rating">
              <div>
                <h5>Rating: &nbsp;</h5>
                <h5>
                  4.8{" "}
                  <span>
                    <img className="rating" src={rating} alt="" />
                  </span>
                </h5>
              </div>
              <div>
                <h5>Price: &nbsp;</h5>
                <h5> 389 &#2547;</h5>
              </div>
            </div>
          </div>
          <button className="card-footer">Add to cart</button>
        </div>
      </div>
    );
};

export default Card;