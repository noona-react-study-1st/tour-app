import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container, Badge, Alert } from 'react-bootstrap';
import { useFetchEventQuery } from '../../hooks/useFetchEvent';
import './Events.style.css';

export default function EventsPage() {
  let eventStartDate = '20230101';
  const { data } = useFetchEventQuery({ eventStartDate });
  console.log(data);
  return <>Events page</>;
}
