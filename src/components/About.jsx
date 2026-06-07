import React from 'react'
import"../assets/css/About.css"
//import aboutimg from '../assets/images/about-img.png'
import cappuccino from'../assets/images/cappuccino.jpg'

function About() {
  return (
    <section className='about-section'>
    <div className='container'>
      <div className='row align-items-center g0'>
        <div className='col-md-6 col-12'>
<img src={cappuccino}  alt='about'className='img-fluid about-img'/> 
   </div>   
      <div className='col-md-6 col-12 about-text'>
<h2>About Our Cafe</h2>
<div className='color'>
</div>
<p>Welcome to Romyk Café, where premium coffee meets delicious desserts. We serve handcrafted drinks, refreshing beverages, and creamy ice cream made with the finest ingredients.</p>
     
    
     
 
      </div>
    </div>
    </div>
    </section>
  )
}

export default About
