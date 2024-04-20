import React from 'react';
import './MainAreaSlide.style.css';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import 'react-multi-carousel/lib/styles.css';
import { useFetchAreaLatelyQuery } from '../../hooks/useFetchAreaLately';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../constants/MainResponsive';
import { useNavigate } from 'react-router-dom';

const MainAreaSlide = () => {
  const { data } = useFetchAreaLatelyQuery();
  const itemList = data?.response.body.items.item;
  console.log('area', itemList);

  const navigate = useNavigate();
  const moveToDetailPage = (contentid) => {
    navigate(`/detail/${contentid}`);
    window.scrollTo(0, 0);
  };

  return (
    <Container className='area-bg'>
      <div className='main-area-banner-title'>지역별 여행 추천</div>
      {itemList && (
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
              className='area-card'
              key={index}
              onClick={() => moveToDetailPage(item?.contentid)}
            >
              <div className='text-area'>
                <div className='area-title'>{item?.title}</div>
                <div className='area-sub-title'>{item?.addr1}</div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </Container>
  );
};

export default MainAreaSlide;
