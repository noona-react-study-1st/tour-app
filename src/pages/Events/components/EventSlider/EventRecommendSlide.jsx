import React, { useState, useEffect } from 'react';
import { useFetchEventQuery } from '../../../../hooks/useFetchEvent';
import { Alert } from 'bootstrap';
import 'react-multi-carousel/lib/styles.css';
import EventSlider from './EventSlider';

const EventRecommendSlide = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [arrange, setArrange] = useState('O');

  const { data, isLoading, isError, error } = useFetchEventQuery({
    eventStartDate: '20200101',
    arrange,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // 1분마다 업데이트

    return () => clearInterval(timer);
  }, []);

  const getSeason = (date) => {
    const month = date.getMonth() + 1; 
    if (month >= 3 && month <= 5) {
      return '봄';
    } else if (month >= 6 && month <= 8) {
      return '여름';
    } else if (month >= 9 && month <= 11) {
      return '가을';
    } else {
      return '겨울';
    }
  };

  const getStartDate = (season, year) => {
    switch (season) {
      case '봄':
        return year * 10000 + 316;
      case '여름':
        return year * 10000 + 616;
      case '가을':
        return year * 10000 + 916;
      case '겨울':
        return year * 10000 + 1216;
      default:
        return year * 10000 + 315; // 기본값은 봄 시작 날짜로 설정
    }
  };

  const getEndDate = (season, year) => {
    switch (season) {
      case '봄':
        return year * 10000 + 515;
      case '여름':
        return year * 10000 + 815;
      case '가을':
        return year * 10000 + 1115;
      case '겨울':
        return year * 10000 + 215;
      default:
        return year * 10000 + 515; // 기본값은 봄 종료 날짜로 설정
    }
  };

  const season = getSeason(currentDate);
  const year = currentDate.getFullYear();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  const filteredEvents = data.response.body.items.item.filter((event) => {
    const endDate = parseInt(event.eventenddate);
    return endDate >= getStartDate(season, year) && endDate <= getEndDate(season, year);
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

  return (
    <div>
      <EventSlider
        title={`${season} 행사`}
        events={filteredEvents}
        responsive={responsive}
      />
    </div>
  );
};

export default EventRecommendSlide;
