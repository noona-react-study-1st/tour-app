import { cities } from '../../constants/area';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CarouselSection.style.css';
import { useAreaStore } from '../../store/area';
import { useWeatherStore } from '../../store/weather';
import { motion } from 'framer-motion';
import { useState } from 'react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function CarouselSection() {
  const { setAreaCode } = useAreaStore();
  const { setCity } = useWeatherStore();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className='area-carousel-section'>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        autoPlay
        autoPlaySpeed={3000}
        infinite={true}
        keyBoardControl={true}
        containerClass='area-carousel-container'
        dotListClass='area-custom-dot-list-style'
        itemClass='area-carousel-item-padding-40-px'
      >
        {cities.map((city, index) => {
          return (
            <div
              className='image-container'
              key={index}
              onClick={() => {
                setAreaCode(city.areaCode, city.name, city.totalCount);
                setCity(city.name);
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.img
                src={city.areaImg}
                whileHover={{ scale: 1.2, filter: 'brightness(0.4)' }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.span
                initial={{ scale: 1, translateY: '0', color: 'white' }}
                animate={
                  isHovered
                    ? {
                        scale: 3.0,
                        translateY: '-500%',
                        color: '#dedeff',
                      }
                    : {}
                }
                transition={{ duration: 0.3 }}
              >
                {city.name}
              </motion.span>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
