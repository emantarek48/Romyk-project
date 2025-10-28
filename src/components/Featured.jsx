import React, { useEffect, useState } from "react";
import "../assets/css/featured.css";

function Featured() {
  const [recipes, setRecipes] = useState([]);
const [visibleCards,setvisibleCards]=useState(6)
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes || []);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);
const handleShowMore=()=>{
setvisibleCards((prevCard)=>prevCard+6);
};
  return (
    <section className="featured-section">
      <div className="container">
        <h1>Our Featured Ice Cream</h1>
        <div className="color2"></div>
        <p>tempor incididunt ut labore et dolore magna aliqua</p>
        <div className="row">
          {recipes.slice(0,visibleCards).map((recipe) => (
            <div key={recipe.id} className="col-lg-4 col-md-6 col-12 mb-4 ">
              <div className="card  shadow-lg border-1 my-2 h-100">
                <img src={recipe.image}
                 alt={recipe.name}
                className="card-img" 
                style={{
                    width:"300px",
              margin:"auto",
                    paddingTop:"50px"
                }}/>
                <div className="card-body">
<h5 className="card-title text-center"> {recipe.name}</h5>
<p className="card-text">{Array.isArray(recipe.instructions)
  ? recipe.instructions.slice(0, 2).join(" ") + "..."
  : recipe.instructions}</p>  
<div className="text-center">
     {recipe.rating}
    <i className="bi bi-star-fill danger"></i>
   
                </div>
               
                <div className="btn-pink2">
        <a href='#'>Add To Cart</a>
      </div>
              </div>
            </div>
            </div>
          ))}
        </div>
        {visibleCards<recipes.length &&(
           <button
            className="btn btn-pink3 mt-4 "
            onClick={handleShowMore}
          >
            Show More
          </button>
        )
        }
      </div>
    </section>
  );
}

export default Featured;
