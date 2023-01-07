import React from "react";
import "./Card.css";
import star from "../../assets/images/star.png";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const Card = ({ food }) => {
  const { user } = useContext(AuthContext);
  const setCart = (selectedFood) => {
    const cart = {
      customerName: user?.displayName,
      customerEmail: user?.email,
      foodId: selectedFood?._id,
      foodName: selectedFood?.name,
      foodImg: selectedFood?.img,
      foodPrice: selectedFood?.price,
      foodCategory: selectedFood?.category,
    };
    fetch("https://server-six-taupe.vercel.app/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Item added");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const { category, name, description, rating, price, img } = food;
  return (
    <div className="card-main">
      <div>
        <div className="card-img">
          <img src={img} alt="" /> <h4 className="category">{category}</h4>
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <p>{description.slice(0, 35)}...</p>
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
        <div onClick={() => setCart(food)} className="card-footer">
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
