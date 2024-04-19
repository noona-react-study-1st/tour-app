import React from 'react';
import './MainBanner.style.css';
// import Carousel from 'react-bootstrap/Carousel';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { useFetchAreaLatelyQuery } from '../../hooks/useFetchAreaLately';
import Carousel from 'react-multi-carousel';
import { Container } from 'react-bootstrap';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MainBanner = () => {
  const { data, isLoading, isError, error } = useFetchAreaLatelyQuery();
  console.log('banner', data);
  const itemList = data?.response.body.items;

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
    >
      <div className='banner-area'>
        <Container>
          <div className='banner-img-area'>
            <img className='img-area'
          src={`${itemList?.item[5].firstimage}`}
          alt='First slide'
        /></div>
          <div className='banner-text-area'>
            <div className='area-code'>{itemList?.item[0].areacode}</div>
            <h1>{itemList?.item[0].title}</h1>
            <p>{itemList?.item[0].addr1}</p>
          </div>
        </Container>
      </div>

      <div className='banner-area'>
        <Container>
          <div className='banner-img-area'>
            <img className='img-area'
          src={`${itemList?.item[1].firstimage}`}
          alt='First slide'
        /></div>
          <div className='banner-text-area'>
          <div className='area-code'>{itemList?.item[1].areacode}</div>
            <h1>{itemList?.item[1].title}</h1>
            <p>{itemList?.item[1].addr1}</p>
          </div>
        </Container>
      </div>

      <div className='banner-area'>
        <Container>
          <div className='banner-img-area'>
            <img className='img-area'
          src={`${itemList?.item[2].firstimage}`}
          alt='First slide'
        /></div>
          <div className='banner-text-area'>
          <div className='area-code'>{itemList?.item[2].areacode}</div>
            <h1>{itemList?.item[2].title}</h1>
            <p>{itemList?.item[2].addr1}</p>
          </div>
        </Container>
      </div>
    </Carousel>
    // <Carousel className='wrap'>
    //   <Carousel.Item interval={1000}>
    //     <img
    //       src={`${itemList?.item[0].firstimage}`}
    //       className='banner-area'
    //       alt='First slide'
    //     />
    //     <Carousel.Caption>
    //       <h3>{itemList?.item[0].title}</h3>
    //       <p>{itemList?.item[0].addr1}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={500}>
    //     <img
    //       src={`${itemList?.item[1].firstimage}`}
    //       className='banner-area'
    //       alt='second slide'
    //     />
    //     <Carousel.Caption>
    //       <h3>{itemList?.item[1].title}</h3>
    //       <p>{itemList?.item[1].addr1}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       src={`${itemList?.item[2].firstimage}`}
    //       className='banner-area'
    //       alt='Third slide'
    //     />
    //     <Carousel.Caption>
    //       <h3>{itemList?.item[2].title}</h3>
    //       <p>{itemList?.item[2].addr1}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
};

export default MainBanner;
