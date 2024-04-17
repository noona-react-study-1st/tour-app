import { Image } from 'react-bootstrap';
import { cities } from '../../constants/area';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CarouselSection.style.css';

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
  // console.log(cities[0].areaImg);

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      containerClass='carousel-container'
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
    >
      {cities.map((city, index) => {
        return (
          <div className='image-container' key={index}>
            <Image src={city.areaImg} rounded />
            <span>{city.name}</span>
          </div>
        );
      })}
    </Carousel>
  );
}
