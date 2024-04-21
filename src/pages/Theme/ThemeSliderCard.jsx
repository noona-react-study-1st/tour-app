import React from 'react';
import './ThemeSliderCard.style.css';

const ThemeSliderCard = ({
  imageUrl,
  promoText,
  title,
  cat2,
  cat3,
  onClick,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className='theme-slider-card'
      onClick={() => onClick(cat2, cat3)}
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
