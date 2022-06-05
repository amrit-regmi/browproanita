import React from 'react';
import Map from '../Map/Map';

const ContactUs = () => {

  const location = {
    address: 'Brow Pro, 1479 Atlantic Blvd, Neptune Beach, FL 32266',
    lat: 30.32376385412655,
    lng:  -81.41400075994149,
  } 

  return (
    <div className='page' id='contact'>
      
      <div className='content contactUs'>
        <div className='pageTitle'>Contact Us / Visit Us</div>
        <div className='pageContent'>
        <div className="asidelh">
            <div className='address'>
              <div>Brow Pro</div>
            1479 Atlantic Blvd <br/>
            Neptune Beach, FL 32266

              <div><a href="tel:+1 904-746-7095" style={{textDecoration:"auto"}}> <i className="fa fa-phone" aria-hidden="true"></i> <span style={{paddingLeft:"10px"}}>+1 904-746-7095</span> </a> </div>
              <div><a href="mailto:probrowjax@gmail.com">probrowjax@gmail.com</a> </div>
            </div>
            <div className="openingHoursContainer"><span className='openingHours'>Opening hours:</span>
        
            <div>Monday to Saturday</div>
            <div>10:00 AM - 07:00 AM</div>
          
            <div style={{marginTop:10}}>Sunday</div>
            <div><strong>Closed</strong></div>
          
        </div>
        </div>
        <Map location={location} zoomLevel={17}></Map>
          
        </div>

        
        
        
      </div>
    </div> 
  )
}

export default ContactUs