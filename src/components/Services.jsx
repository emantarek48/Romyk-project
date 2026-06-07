import React from 'react'
//import { FaIceCream } from "react-icons/fa";
import"../assets/css/services.css"
function Services() {
  return (
   <section className='services-section'>
<div className="container">
    <h1>Our Cafe Services</h1>
    <div className="color3"></div>
    <p>tempor incididunt ut labore et dolore magna aliqua</p>
    <div className="row">
        <div className="col-md-4 col-6">
<div className="card">
  <div className="card-body">
    
    <h5 className="card-title">  Premium Coffee</h5>
    <p className="card-text">Freshly brewed coffee made from high quality beans.</p>
  </div>
</div>
        </div>
            <div className="col-md-4 col-6">
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Ice Cream</h5>
    <p className="card-text">Creamy ice cream available in many delicious flavors.</p>
  </div>
</div>
        </div>
            <div className="col-md-4 col-6">
<div className="card">
  <div className="card-body">
    <h5 className="card-title"> Fast Delivery</h5>
    <p className="card-text">Quick delivery right to your doorstep.</p>
  </div>
</div>
        </div>
    </div>
        
       

</div>
 
   

   </section>
  )
}

export default Services
