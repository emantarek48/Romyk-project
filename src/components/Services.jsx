import React from 'react'
import { FaIceCream } from "react-icons/fa";
import"../assets/css/services.css"
function Services() {
  return (
   <section className='services-section'>
<div className="container">
    <h1>Our Ice Cream Services</h1>
    <div className="color3"></div>
    <p>tempor incididunt ut labore et dolore magna aliqua</p>
    <div className="row">
        <div className="col-md-4 col-6">
<div className="card">
  <div className="card-body">
    
    <h5 className="card-title">  <FaIceCream className="text-danger me-2" />Cookies Ice Cream</h5>
    <p className="card-text">Cookies Ice Creamcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat</p>
  </div>
</div>
        </div>
            <div className="col-md-4 col-6">
<div className="card">
  <div className="card-body">
    <h5 className="card-title"> <FaIceCream className="text-danger me-2" />Cookies Ice Cream</h5>
    <p className="card-text">Cookies Ice Creamcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat</p>
  </div>
</div>
        </div>
            <div className="col-md-4 col-6">
<div className="card">
  <div className="card-body">
    <h5 className="card-title"> <FaIceCream className="text-danger me-2" />Cookies Ice Cream</h5>
    <p className="card-text">Cookies Ice Creamcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat</p>
  </div>
</div>
        </div>
    </div>
        
       

</div>
 
   <div className="btn-pink4">
        <a href='/'>Show More</a>
      </div>

   </section>
  )
}

export default Services
