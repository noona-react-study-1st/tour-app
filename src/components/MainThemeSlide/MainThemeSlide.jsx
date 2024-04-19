import React from 'react';
import './MainThemeSlide.style.css';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../constants/MainResponsive';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-multi-carousel';
import { useFetchAreaCatQuery } from '../../hooks/useFetchAreaCat';

const ThemeSlide = () => {
  const cat1 = 'A01';
  const { data } = useFetchAreaCatQuery({ cat1 });
  console.log('cat', data);

  return (
    <Container>
      <div className='theme-title'>어떤 여행을 원하시나요?</div>
      <div class='wrap'>
        <div class='slider'>
          <div class='python slide'>
            <h2>🍀자연 속 힐링</h2>
          </div>
          <div class='react slide'>
            <h2>🍜맛집 탐방</h2>
          </div>
          <div class='rest-api slide'>
            <h2>🤿다이나믹 레포츠</h2>
          </div>
        </div>
        <div>
          <h2>여행을 떠나보아요!</h2>
        </div>
      </div>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container'
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <div className='theme-card'>Item 1</div>
        <div className='theme-card'>Item 2</div>
        <div className='theme-card'>Item 3</div>
        <div className='theme-card'>Item 4</div>
      </Carousel>
    </Container>
  );
};

export default ThemeSlide;
