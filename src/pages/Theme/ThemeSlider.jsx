import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import ThemeSliderCard from './ThemeSliderCard';
import './ThemeSlider.style.css';
import { Container } from 'react-bootstrap';
// import { responsive } from '../../constants/MainResponsive';

const ThemeSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const cards = [
    {
      imageUrl:
        'http://tong.visitkorea.or.kr/cms/resource/37/2009137_image2_1.jpg',
      promoText: '홍보 문구 홍보 문구',
      title: '민속마을',
    },
    {
      imageUrl:
        'http://tong.visitkorea.or.kr/cms/resource/78/2639278_image2_1.jpg',
      promoText: '홍보 문구 홍보 문구',
      title: '치유의 숲',
    },
    {
      imageUrl:
        'http://tong.visitkorea.or.kr/cms/resource/15/2802615_image2_1.jpg',
      promoText: '홍보 문구 홍보 문구',
      title: '과학 체험관',
    },
    {
      imageUrl:
        'http://tong.visitkorea.or.kr/cms/resource/61/2795361_image2_1.jpg',
      promoText: '홍보 문구 홍보 문구',
      title: '이색 찜질방',
    },
  ];

  return (
    <div className='theme-slider'>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {cards.map((card, index) => (
          <ThemeSliderCard
            key={index}
            imageUrl={card.imageUrl}
            promoText={card.promoText}
            title={card.title}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ThemeSlider;
