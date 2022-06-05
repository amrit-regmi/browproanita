import React from 'react';

const Home = () => {

  return (
    <div className='homePage' id="home">
      <div className='homePageContent'>
        <div className='missionText'>
          Your<br/> satisfaction <br/>
          is our <br/>
          commitment
        </div>
        <div className='welcome'>
          Welcome
        </div>
        <a className='appointmentBtn' href="tel:+1 904-746-7095">
          <i className="fa fa-phone" aria-hidden="true"></i> <span style={{paddingLeft:"10px"}}>Book Appointment</span> 
        </a>
      </div>
    </div> 
  )
}

export default Home