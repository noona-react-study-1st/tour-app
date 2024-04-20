import React from 'react';
import './MainWeather.style.css';
import { Container } from 'react-bootstrap';
import MainWeatherSummary from './MainWeatherSummary/MainWeatherSummary';

const MainWeather = () => {
  return (
    <Container className='main-weather-area'>
      <div className='main-weather-banner-title'>여행지 날씨 정보</div>
      <div>
        <MainWeatherSummary />
      </div>
    </Container>
  );
};

export default MainWeather;
