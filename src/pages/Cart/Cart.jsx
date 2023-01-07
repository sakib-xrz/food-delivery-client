import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./Cart.css";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import ReactToPdf from "react-to-pdf";
import LargeSpinner from "../../components/Spinner/LargeSpinner/LargeSpinner";

const Cart = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const ref = React.createRef();

  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const { data: myCart = [], refetch } = useQuery({
    queryKey: ["myCart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://server-six-taupe.vercel.app/cart?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      if (res.status === 401 || res.status === 403) {
        return logout();
      }
      setLoading(false);
      const data = await res.json();
      return data;
    },
  });

  function calculateTotal(products) {
    const total = products.reduce(
      (acc, product) => acc + parseInt(product.foodPrice),
      0
    );
    return total;
  }
  const total = calculateTotal(myCart);

  const handleDelete = (singleItem) => {
    fetch(`https://server-six-taupe.vercel.app/cart/${singleItem?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Item removed");
        }
      });
  };

  if (myCart.length === 0) {
    return (
      <div className="no-cart">
        <h2 className="no-cart-heading">No Item Added</h2>
        <p>Please add some food</p>
        <Link to={"/menu"}>
          <button className="back-homepage">Back to shop</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cart-parent">
        <div className="cart-box">
          {loading ? (
            <LargeSpinner />
          ) : (
            <div className="cart" ref={ref}>
              <h2>Your cart</h2>
              <ul>
                {myCart.map((c) => (
                  <li key={c?._id} className="cart-list">
                    <div className="cart-main">
                      <div className="img-col">
                        <img src={c?.foodImg} alt="" />
                      </div>
                      <div className="content-column">
                        <div className="cart-content-main">
                          <div className="cart-title">
                            <h3 className="name-price">{c?.foodName}</h3>
                            <p>Category</p>
                          </div>
                          <div className="cart-price">
                            <h3 className="name-price">
                              {parseInt(c?.foodPrice)} ৳
                            </h3>
                            <p>{c?.foodCategory}</p>
                          </div>
                        </div>
                        <div className="remove-button-div">
                          <button
                            onClick={() => handleDelete(c)}
                            type="button"
                            className="remove-button"
                          >
                            <ImBin className="delete-btn-icon" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="subtotal-div">
                <h3 className="subtotal">
                  Total amount: &nbsp;
                  <span>{total} ৳</span>
                </h3>
              </div>
              <div className="total-btn-div">
                <Link to={"/menu"}>
                  <button className="shop-button" type="button">
                    Back to shop
                  </button>
                </Link>
                <ReactToPdf
                  y={25}
                  x={15}
                  scale={1.7}
                  targetRef={ref}
                  filename="invoice.pdf"
                >
                  {({ toPdf }) => (
                    <button
                      onClick={toPdf}
                      className="order-button"
                      type="button"
                    >
                      Place Order
                    </button>
                  )}
                </ReactToPdf>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Cart;
