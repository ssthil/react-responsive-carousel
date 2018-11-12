import React from 'react';

const Carousel = ({ imgUrl, alt, userName }) => (
  <div className="image-holder">
    <div>
      <img src={imgUrl} alt={alt}  />
      <div className="user-name">{userName}</div>
    </div>
  </div>
)

export default Carousel;