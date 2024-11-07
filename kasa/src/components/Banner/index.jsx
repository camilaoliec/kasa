import React from 'react';
import './Banner.scss';

const Banner = ({ backgroundImage, title }) => {
  return (
    <div 
      className="banner"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }}
    >
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner
