import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card/Card";
import LargeSpinner from "../../components/Spinner/LargeSpinner/LargeSpinner";
import "./Menu.css";

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods/all")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setFoods(data);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="home-title">Don’t starve, just order</h1>
      {loading ? (
        <LargeSpinner />
      ) : (
        <div className="card-div">
          {foods.map((food) => (
            <Card key={food._id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
