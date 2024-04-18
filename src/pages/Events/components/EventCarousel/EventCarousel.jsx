import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const EventCarousel = ({ images }) => {
console.log("img",images)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tabletLg: {
      breakpoint: { max: 1600, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 760 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        itemClass='detailBannerItem'
        responsive={responsive}
        arrows={false}
        showDots={true}
      >
        {images?.map((image, index) => (
          <div
            className='image'
            key={index}
            style={{
              backgroundImage: `url(${image?.firstimage})`,
            }}
          ></div>
        ))}
      </Carousel>
    </div>
  );
};

export default EventCarousel;
