import React from 'react';
import { responsive } from '../../constants/MainResponsive';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-multi-carousel';
import './MainEventsSlide.style.css';
import { useFetchEventsLatelyQuery } from '../../hooks/useFetchEventsLately';
import { useNavigate } from 'react-router-dom';

const MainEventsSlide = () => {
  const eventStartDate = '20240401';
  const { data } = useFetchEventsLatelyQuery({ eventStartDate });
  console.log('event', data);
  const itemList = data?.response.body.items.item;

  const navigate = useNavigate();
  const moveToDetailPage = (contentid) => {
    navigate(`/detail/${contentid}`);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <div className='title'>놓칠 수 없는 행사</div>
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
              className='events-card'
              key={index}
              onClick={() => moveToDetailPage(item?.contentid)}
            >
              <div className='text-events'>
                <div className='events-title'>{item?.title}</div>
                <div className='events-sub-title'>
                  {item?.eventstartdate}-{item?.eventenddate}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </Container>
  );
};

export default MainEventsSlide;
