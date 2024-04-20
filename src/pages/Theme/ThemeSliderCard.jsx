import React from 'react';
import './ThemeSliderCard.style.css';

const ThemeSliderCard = ({ imageUrl, promoText, title }) => {
  console.log('imageUrl, promoText, title : ', imageUrl, promoText, title);
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className='theme-slider-card'
    >
      <div className='theme-overlay'>
        <div className='slider-card-txt'>
          <h4>{promoText}</h4>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ThemeSliderCard;
