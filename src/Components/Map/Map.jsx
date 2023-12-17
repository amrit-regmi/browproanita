import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAi5VnAoZahZHqTYWdyU9igR8qihKKgyHY' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
         
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)
export default Map
