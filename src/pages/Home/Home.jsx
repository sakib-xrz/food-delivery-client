import React, { useEffect, useState } from "react";
import LargeSpinner from "../../components/Spinner/LargeSpinner/LargeSpinner";
import star from "../../assets/images/star.png";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://server-six-taupe.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setFoods(data);
      });
  }, []);
  return (
    <div>
      <div className="banner">
        <div className="second">
          <h1>Restaurant Food and Takeaway Delivered.</h1>
          <h3>Find restaurants or foods delivering right now, near you</h3>
          <div className="see-all-div">
            <Link to={"/menu"}>
              <button className="banner-see-all">See All Menu</button>
            </Link>
          </div>
        </div>
      </div>
      {loading ? (
        <LargeSpinner />
      ) : (
        <>
          <h2 className="homepage-title">Popular Items</h2>
          <div className="container card-div">
            {foods.map((food) => (
              <div key={food?._id} className="card-main">
                <div>
                  <div className="card-img">
                    <img src={food?.img} alt="" />{" "}
                    <h4 className="category">{food?.category}</h4>
                  </div>
                  <div className="home-card-content">
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
          <div className="see-all-div">
            <Link to={"/menu"}>
              <button className="see-all">See All Menu</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
