import React, { useEffect, useState } from "react";
import "../assets/css/featured.css";

function Featured() {
  const [recipes, setRecipes] = useState([]);
  const [visibleCards, setVisibleCards] = useState(6);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleCards((prevCard) => prevCard + 6);
  };

 const addToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  window.dispatchEvent(new Event("cartUpdated")); // 👈 مهم جدًا

  alert(`${item.title} added to cart`);
};
window.dispatchEvent(new Event("cartUpdated"));
  return (
    <section id="featured" className="featured-section">
      <div className="container">
        <h1>Our Special Drinks</h1>
        <div className="color2"></div>
        <p>Discover our most loved coffee drinks and frozen desserts.</p>

        <div className="row">
          {recipes.slice(0, visibleCards).map((recipe) => (
            <div
              key={recipe.id}
              className="col-lg-4 col-md-6 col-12 mb-4"
            >
              <div className="card shadow-lg border-1 my-2 h-100">

                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="card-img"
                 style={{
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "15px"
}}
                />

                <div className="card-body">

                  <h5 className="card-title text-center">
                    {recipe.title}
                  </h5>

                  <p className="card-text">
                    {recipe.description
                      ? recipe.description.slice(0, 100) + "..."
                      : "Delicious ice cream"}
                  </p>

                  <div className="text-center mb-3">
                    ⭐ 4.8
                  </div>

                  <div className="text-center">
                    <button
                      className="btn-pink2"
                      onClick={() => addToCart(recipe)}
                    >
                      Add To Cart
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCards < recipes.length && (
          <button
            className="btn btn-pink3 mt-4"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
}

export default Featured;