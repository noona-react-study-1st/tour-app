import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Pagination } from 'react-bootstrap';
import { useFetchEventQuery } from '../../hooks/useFetchEvent';
import { useFetchEventCarouselQuery } from '../../hooks/useFetchEventCarousel';
import EventCarousel from '../Events/components/EventCarousel/EventCarousel';
import EventCard from '../Events/components/EventCard/EventCard';
import EventList from '../Events/components/EventList/EventList';
import './Events.style.css';

export default function EventsPage() {
  let eventStartDate = '20200101';
  const eventsPerPage = 6;

  const [cardCurrentPage, setCardCurrentPage] = useState(1);
  const [listCurrentPage, setListCurrentPage] = useState(1);
  const [arrange, setArrange] = useState('O');

  const { data, isLoading } = useFetchEventQuery({ eventStartDate, arrange });
  const { data: images, isLoading: isImgLoading } = useFetchEventCarouselQuery({
    eventStartDate,
  });

  const handleNameSort = () => {
    setArrange('O');
    console.log('O');
  };

  const handleLatestSort = () => {
    setArrange('Q');
    console.log('Q');
  };

  const handleOldestSort = () => {
    setArrange('R');
    console.log('R');
  };

  useEffect(() => {
    setCardCurrentPage(1);
    setListCurrentPage(1);
  }, [arrange]);

  useEffect(() => {
    // arrangeData가 비어 있는 경우 데이터를 다시 가져옴
    if (!data) {
    }
  }, [data]);

  const handleCardPaginate = (pageNumber) => setCardCurrentPage(pageNumber);
  const handleListPaginate = (pageNumber) => setListCurrentPage(pageNumber);

  console.log('arr', data);

  const displayData =
    data &&
    data.response &&
    data.response.body &&
    data.response.body.items &&
    data.response.body.items.item;

  console.log('display', displayData);

  const indexOfLastFestival = cardCurrentPage * eventsPerPage;
  const indexOfFirstFestival = indexOfLastFestival - eventsPerPage;

  const indexOfLastEvent = listCurrentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  const currentFestivals = displayData
    ? displayData.filter((event) => event.cat2 === 'A0207').slice(indexOfFirstFestival, indexOfLastFestival)
    : [];

  const currentEvents = displayData
    ? displayData.filter((event) => event.cat2 === 'A0208').slice(indexOfFirstEvent, indexOfLastEvent)
    : [];

  if (isLoading || isImgLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <EventCarousel images={images} />
      </Row>
      <Row>
        <div className='arrange-area'>
          <div onClick={handleNameSort}>이름순</div>
          <div onClick={handleLatestSort}>최신순</div>
          <div onClick={handleOldestSort}>오래된순</div>
        </div>
      </Row>
      <Row className='card-area'>
        {currentFestivals.map((event) => (
          <Col key={event.contentid} lg={4} md={6} xs={12}>
            <EventCard event={event} />
          </Col>
        ))}
        <Pagination className='justify-content-center'>
          {displayData && (
            <Pagination.Prev
              onClick={() => handleCardPaginate(Math.max(cardCurrentPage - 1, 1))}
              disabled={cardCurrentPage === 1}
            />
          )}
          {displayData &&
            Array.from({
              length: Math.ceil(displayData.length / eventsPerPage),
            }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === cardCurrentPage}
                onClick={() => handleCardPaginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          {displayData && (
            <Pagination.Next
              onClick={() =>
                handleCardPaginate(Math.min(cardCurrentPage + 1, Math.ceil(displayData.length / eventsPerPage)))
              }
              disabled={cardCurrentPage === Math.ceil(displayData.length / eventsPerPage)}
            />
          )}
        </Pagination>
      </Row>

      <Row className='list-area'>
        {currentEvents.map((event) => (
          <Col key={event.contentid} lg={4} md={6} xs={12}>
            <EventList event={event} />
          </Col>
        ))}
        <Pagination className='justify-content-center'>
          {displayData && (
            <Pagination.Prev
              onClick={() => handleListPaginate(Math.max(listCurrentPage - 1, 1))}
              disabled={listCurrentPage === 1}
            />
          )}
          {displayData &&
            Array.from({
              length: Math.ceil(displayData.length / eventsPerPage),
            }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === listCurrentPage}
                onClick={() => handleListPaginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          {displayData && (
            <Pagination.Next
              onClick={() =>
                handleListPaginate(Math.min(listCurrentPage + 1, Math.ceil(displayData.length / eventsPerPage)))
              }
              disabled={listCurrentPage === Math.ceil(displayData.length / eventsPerPage)}
            />
          )}
        </Pagination>
      </Row>
    </Container>
  );
}
