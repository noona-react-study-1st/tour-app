import React from 'react';
import './MainThemeSlide.style.css';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import { useFetchAreaCatQuery } from '../../hooks/useFetchAreaCat';
import Carousel from 'react-multi-carousel';
import { useState } from 'react';
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
  const cat1 = 'A05';
  const { data } = useFetchAreaCatQuery({ cat1 });
  console.log('cat', data);
  const itemList = data?.response.body.items.item;

  const navigate = useNavigate();
  const moveToDetailPage = () => {
    navigate('./theme');
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <div className='theme-title'>어떤 여행을 원하시나요?</div>
      <div class='wrap'>
        <div class='slider'>
          <div class='a01 slide' onClick={()=>moveToDetailPage()}>
            <h2>🍀자연 속 힐링</h2>
          </div>
          <div class='a05 slide'onClick={()=>moveToDetailPage()}>
            <h2>🍜맛집 탐방</h2>
          </div>
          <div class='a03 slide'onClick={()=>moveToDetailPage()}>
            <h2>🤿다이나믹 레포츠</h2>
          </div>
        </div>
        <div>
          <h2>여행을 떠나보아요!</h2>
        </div>
      </div>
      {/* {itemList && (
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass='carousel-item-padding-40-px'
          containerClass='carousel-container'
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {itemList?.map((item, index) => (
            <div
              style={{
                backgroundImage: 'url(' + `${item?.firstimage}` + ')',
              }}
              className='nature-card'
              key={index}
            >
              <div className='text-area'>
                <div className='nature-title'>{item?.title}</div>
                <div className='nature-sub-title'>{item?.addr1}</div>
              </div>
            </div>
          ))}
        </Carousel>
      )} */}
    </Container>
  );
};

export default ThemeSlide;
