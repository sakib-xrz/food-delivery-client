import React, { useEffect, useState } from "react";
import LargeSpinner from "../../components/Spinner/LargeSpinner/LargeSpinner";
import star from "../../assets/images/star.png";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setFoods(data);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="home-title">Homepage</h1>
      {loading ? (
        <LargeSpinner />
      ) : (
        <div className="card-div">
          {foods.map((food) => (
            <div className="card-main">
              <div>
                <div className="card-img">
                  <img src={food?.img} alt="" />{" "}
                  <h4 className="category">{food?.category}</h4>
                </div>
                <div className="card-content">
                  <h3>{food?.name}</h3>
                  <p>{food?.description.slice(0, 35)}...</p>
                  <div className="price-rating">
                    <div>
                      <h5>Rating: &nbsp;</h5>
                      <h5>
                        {food?.rating}{" "}
                        <span>
                          <img className="rating" src={star} alt="" />
                        </span>
                      </h5>
                    </div>
                    <div>
                      <h5>Price: &nbsp;</h5>
                      <h5> {food?.price} &#2547;</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
