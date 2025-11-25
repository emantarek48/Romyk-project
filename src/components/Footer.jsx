import React, { useState } from 'react'
import '../assets/css/footer.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
function Footer(){
        const[form,setForm]=useState({name:"",email:"",phone:"",message:""});
        const handlechange=(e)=>setForm({...form, [e.target.name]:e.target.value});
        const handlesubmit=(e)=>{
            e.preventDefault()
            console.log("contact-form",form);
            alert("Message sent")
            setForm({name:"",email:"",phone:"",message:""})
            
        };
  return (
   <section className='footer-section'>
    <div className="container">
<div className="row align-items-start">
    <div className="col-md-6">
  <h2 className='contact-title'>Contact Us</h2>
            <hr className="contact-hr" />
<form onSubmit={handlesubmit} className='contact-form'>
<div className='mb-4'>
   
    <input name='name' value={form.name} onChange={handlechange} className=" custom-input" placeholder='Name' required></input>
</div>

<div className='mb-4'>
   
    <input name='email' type='email' value={form.email} onChange={handlechange} className=" custom-input" placeholder='Email' required></input>
</div>

<div className='mb-4'>

    <input name='phone' type='tel' value={form.phone} onChange={handlechange} className=" custom-input" placeholder='Phone Number' required></input>
</div>

<div className='mb-4'>
    
    <textarea name='message' rows={5} value={form.message} onChange={handlechange} className=" custom-input" placeholder='Message'></textarea>
</div>
 <button type="submit" className="btn btn-pink ">Send</button>
 </form>
    </div>
    {/* RIGHT */}
    <div className="col-md-6 col-12">
        <div className='d-flex align-items-start  contact-info-wrap '>
<div className="items">
     <FaMapMarkerAlt className="info-icon1" />
                <span>Making this the first true</span>
</div>
<div className="items">
     <FaPhoneAlt className="info-icon" />
                <span>Call :0123456789</span>
</div>
<div className="items">
 <FaEnvelope className="info-icon" />
                <span>Email : demo@gmail.com</span>
</div>
</div>
 <div className="newsletter">
              <h5 className="fw-bold">Newsletter</h5>
              <div className="d-flex mt-4 newsletter">
                <input type="email" placeholder="Enter your email" className="form-control newsletter-input"/>
               
                <div className="btn-pink newsletter-btn">
        <a href='/'>Subscribe</a>
      </div>
              </div>
            </div>
            <div className="socials mt-5">
              <div className="d-flex gap-3 justify-content-center ">
                <a className="social-circle" href="/" aria-label="Facebook"><FaFacebookF/></a>
                <a className="social-circle" href="/" aria-label="Twitter"><FaTwitter/></a>
                <a className="social-circle" href="/" aria-label="Linledin"><FaLinkedinIn/></a>
                <a className="social-circle" href="/" aria-label="Instagram"><FaInstagram/></a>
              </div>
            </div>
        </div>

    </div>

<hr className="mt-5 " />
        <p className="text-center py-3">2020 All Rights Reserved. Design by Free Html Templates</p>
    </div>
   </section>
  )
}

export default Footer
