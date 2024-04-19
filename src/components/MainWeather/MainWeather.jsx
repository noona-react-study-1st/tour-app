import React from 'react';
import './MainWeather.style.css';
import { Container, Row, Col } from 'react-bootstrap';

const MainWeather = () => {
  return (
    <Container>
      <div className='title'>여행지 정보 체크</div>
      <Row className='wrap'>
        <Col lg={6} xs={12} className='info-box'>
          <div>여행지 날씨 정보</div>
        </Col>
        <Col lg={6} xs={12} className='info-box'>
          <div>여행지 미세먼지 정보</div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainWeather;
