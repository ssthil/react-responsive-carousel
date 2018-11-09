import React from 'react';

const Carousel = ({ imgUrl, alt, userName }) => (
  <div className="image-holder">
    <span>
      <img src={imgUrl} alt={alt} width={250} height={200} />
      <span className="user-name">{userName}</span>
    </span>
  </div>
)

export default Carousel;