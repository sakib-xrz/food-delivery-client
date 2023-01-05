import React from "react";
import "./Card.css";
import star from "../../assets/images/star.png";

const Card = ({ food }) => {
  const { category, name, description, rating, price, img } = food;
  return (
    <div className="card-main">
      <div>
        <div className="card-img">
          <img src={img} alt="" /> <h4 className="category">{category}</h4>
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <p>{description.slice(0,35)}...</p>
          <div className="price-rating">
            <div>
              <h5>Rating: &nbsp;</h5>
              <h5>
                {rating}{" "}
                <span>
                  <img className="rating" src={star} alt="" />
                </span>
              </h5>
            </div>
            <div>
              <h5>Price: &nbsp;</h5>
              <h5> {price} &#2547;</h5>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
