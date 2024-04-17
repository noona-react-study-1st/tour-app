import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import { useFetchEventQuery } from '../../hooks/useFetchEvent';
import EventCard from '../Events/components/EventCard/EventCard';
import './Events.style.css';

export default function EventsPage() {
  let eventStartDate = '20230101';
  const { data } = useFetchEventQuery({ eventStartDate });
  const displayData = data?.items.item;

  console.log('datatest2', displayData);

  return (
    <Container>
      <Row>
        <div className='search-area'>
          <div>시기</div>
          <div>지역</div>
          <div>카테고리</div>
          <div>리셋</div>
          <div>검색</div>
        </div>
        <div className='sort-area'>
          <div>최신순</div>
          <div>인기순</div>
        </div>
      </Row>
      <Row className='card-area'>
        {displayData &&
          displayData.map((event) => (
            <Col key={event.contentid} lg={4} xs={12}>
              <EventCard event={event} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
