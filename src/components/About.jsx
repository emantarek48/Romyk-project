import React from 'react'
import"../assets/css/About.css"
import aboutimg from '../assets/images/about-img.png'
import { Link } from "react-router-dom";

function About() {
  return (
    <section className='about-section'>
    <div className='container'>
      <div className='row align-items-center g0'>
        <div className='col-md-6 col-12'>
<img src={aboutimg}  alt='about'className='img-fluid about-img'/> 
   </div>   
      <div className='col-md-6 col-12 about-text'>
<h2>About Icecream</h2>
<div className='color'>
</div>
<p>About IcecreamConsectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore euconsectetur adipiscing esequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
     
      <div className="btn-pink">
        <a href='#'>Read More</a>
      </div>
     
 
      </div>
    </div>
    </div>
    </section>
  )
}

export default About
