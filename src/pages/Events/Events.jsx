import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container, Badge, Alert } from 'react-bootstrap';
import { useFetchEventQuery } from '../../hooks/useFetchEvent';
import EventCard from '../Events/components/EventCard/EventCard';
import './Events.style.css';

export default function EventsPage() {
  let eventStartDate = '20230101';
  const { data } = useFetchEventQuery({ eventStartDate });
  console.log('datatest', data);

  const displayData = data?.items.item;

  console.log('datatest2', displayData);

  return (
    <Container>
      <Row>
        {displayData && displayData.map(event => (
          <Col key={event.contentid} xs={12} md={6} lg={4}>
            <EventCard event={event} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
