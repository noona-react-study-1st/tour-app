import React from 'react';
import './ThemeSliderCard.style.css';

const ThemeSliderCard = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url(http://tong.visitkorea.or.kr/cms/resource/37/2009137_image2_1.jpg)',
      }}
      className='theme-slider-card'
    >
      <div className='overlay'>
        <div className='slider-card-txt'>
          <h4>홍보 문구 홍보 문구</h4>
          <h2>민속마을</h2>
        </div>
      </div>
    </div>
  );
};

export default ThemeSliderCard;
