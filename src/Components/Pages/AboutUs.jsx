import React, { useEffect,  useState } from 'react';


const AboutUs =(props, ref) => {

  
  
  return (
    <div className='page'>
      <div className='content aboutUs'>
        <div className='pageTitle'>About Us</div>
        <div className='pageContent'>
        Brow pro started its service in  2022 with the aim to provide quality professional beauty services to the people at much affordable prices. It is owned by experinced professional cosmetologist Anita Sharma who has more than 14 years of experience. Making others feel beautiful has always been a passion for Anita, and she puts that passion to work in her business.
<br/>At Brow pro every customers need is treated individaully and is committed to providing quality professional services in a comfortable, clean and relaxed setting. Our mission is to exceed client expectations by providing excellent service. We take pride in every service we offer and value each client that enters our salon.

        </div>
        <div className="aboutImages" 
        > 
        
        <img className='aboutImage' src={require("../../Images/about1.jpg")}  alt={"Salon view 1"}/>
        <img className='aboutImage' src={require("../../Images/about2.jpg")}  alt={"Salon view 2"}/>
        <img className='aboutImage' src={require("../../Images/about3.jpg")}  alt={"Salon view 3"}/>
      
        </div>
      </div>
    </div> 
  )
}

export default AboutUs