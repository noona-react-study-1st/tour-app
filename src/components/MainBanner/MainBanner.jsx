import React from 'react';
import './MainBanner.style.css';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { useFetchAreaLatelyQuery } from '../../hooks/useFetchAreaLately';
import Carousel from 'react-multi-carousel';
import { Container } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
  const areaCode = '';
  const { data, isLoading, isError, error } = useFetchAreaLatelyQuery({
    areaCode,
  });
  console.log('banner', data);
  const itemList = data?.response.body.items;

  const navigate = useNavigate();
  const moveToDetailPage = (contentid) => {
    navigate(`/detail/${contentid}`);
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  return (
    <div>
      {itemList && (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          <div className='banner-area'>
            <Container>
              <div
                className='banner-img-area'
              >
                <img
                  className='img-area'
                  src={`${itemList?.item[5].firstimage}`}
                  alt='slide img'
                />
              </div>
              <div className='banner-text-area'>
                <h1>{itemList?.item[5].title}</h1>
                <button onClick={() => moveToDetailPage(itemList?.item[5].contentid)}>자세히보기</button>
              </div>
            </Container>
          </div>

          <div className='banner-area'>
            <Container>
              <div
                className='banner-img-area'
              >
                <img
                  className='img-area'
                  src={`${itemList?.item[4].firstimage}`}
                  alt='slide img'
                />
              </div>
              <div className='banner-text-area'>
                <h1>{itemList?.item[4].title}</h1>
                <button onClick={() => moveToDetailPage(itemList?.item[4].contentid)}>자세히보기</button>
              </div>
            </Container>
          </div>

          <div className='banner-area'>
            <Container>
              <div
                className='banner-img-area'
              >
                <img
                  className='img-area'
                  src={`${itemList?.item[2].firstimage}`}
                  alt='slide img'
                />
              </div>
              <div className='banner-text-area'>
                <h1>{itemList?.item[2].title}</h1>
                <button onClick={() => moveToDetailPage(itemList?.item[2].contentid)}>자세히보기</button>
              </div>
            </Container>
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default MainBanner;
