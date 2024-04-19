import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import ThemeSliderCard from './ThemeSliderCard';
import './ThemeSlider.style.css';

const ThemeSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className='theme-slider'>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        <ThemeSliderCard />
        <ThemeSliderCard />
        <ThemeSliderCard />
        <ThemeSliderCard />
      </Carousel>
      {/* <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
      >
        <ThemeSliderCard />
        <ThemeSliderCard />
        <ThemeSliderCard />
        <ThemeSliderCard />
      </Carousel> */}
    </div>
  );
};

export default ThemeSlider;
