import React, { useState } from 'react';
import { useFetchEventQuery } from '../../../../hooks/useFetchEvent';
import { Alert } from 'bootstrap';
import 'react-multi-carousel/lib/styles.css';
import EventSlider from './EventSlider';

const EventBookTourSlide = () => {
  const eventStartDate = '20200101';
  const [arrange, setArrange] = useState('O');

  const { data, isLoading, isError, error } = useFetchEventQuery({
    eventStartDate,
    arrange,
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  // 필터링하여 booktour 값이 1인 데이터만 가져오기
  const filteredEvents = data.response.body.items.item.filter(
    (event) => event.booktour === ''
  );

  return (
    <div>
      <EventSlider
        title='교과서속 행사'
        events={filteredEvents}
        responsive={responsive}
      />
    </div>
  );
};

export default EventBookTourSlide;