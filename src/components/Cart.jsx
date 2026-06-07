import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalItems = cartItems.length;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty 😢</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card p-3 shadow">

                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px"
                    }}
                  />

                  <h5 className="mt-2">{item.title}</h5>

                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}
          </div>

          <h4 className="text-center mt-4">
            Total Items: {totalItems}
          </h4>
        </>
      )}
    </div>
  );
}

export default Cart;