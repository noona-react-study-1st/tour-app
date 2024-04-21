import React from 'react';
import './MainThemeSlide.style.css';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import { useFetchAreaCatQuery } from '../../hooks/useFetchAreaCat';
import { useNavigate } from 'react-router-dom';

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ThemeSlide = () => {

  const navigate = useNavigate();
  const moveToDetailPage = () => {
    navigate('./theme');
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <div className='theme-title'>어떤 여행을 원하시나요?</div>
      <div className='wrap'>
        <div className='slider'>
          <div className='a01 slide' onClick={()=>moveToDetailPage()}>
            <h2>🍀자연 속 힐링</h2>
          </div>
          <div className='a05 slide'onClick={()=>moveToDetailPage()}>
            <h2>🍜맛집 탐방</h2>
          </div>
          <div className='a03 slide'onClick={()=>moveToDetailPage()}>
            <h2>🤿다이나믹 레포츠</h2>
          </div>
        </div>
        <div>
          <h2>여행을 떠나보아요!</h2>
        </div>
      </div>
    </Container>
  );
};

export default ThemeSlide;
