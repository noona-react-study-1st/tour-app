import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Pagination } from 'react-bootstrap';
import { useFetchEventQuery } from '../../hooks/useFetchEvent';
import { useFetchEventCarouselQuery } from '../../hooks/useFetchEventCarousel';
import EventCarousel from '../Events/components/EventCarousel/EventCarousel';
import EventCard from '../Events/components/EventCard/EventCard';
import './Events.style.css';

export default function EventsPage() {
  let eventStartDate = '20200101';
  const eventsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [arrange, setArrange] = useState('O');

  const { data, isLoading } = useFetchEventQuery({ eventStartDate, arrange });
  const { data: images, isLoading: imgIsLoading } = useFetchEventCarouselQuery({
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
    setCurrentPage(1);
  }, [arrange]);

  useEffect(() => {
    // arrangeData가 비어 있는 경우 데이터를 다시 가져옴
    if (!data) {
    }
  }, [data]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log('arr', data);

  const displayData =
    data &&
    data.response &&
    data.response.body &&
    data.response.body.items &&
    data.response.body.items.item;

  console.log('display', displayData);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = displayData?.slice(indexOfFirstEvent, indexOfLastEvent);

  if (isLoading || imgIsLoading) {
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
        {currentEvents &&
          currentEvents.map((event) => (
            <Col key={event.contentid} lg={4} md={6} xs={12}>
              <EventCard event={event} />
            </Col>
          ))}
      </Row>
      <Row className='pagination-area'>
        <Pagination className='justify-content-center'>
          {displayData && (
            <Pagination.Prev
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
          )}
          {displayData &&
            Array.from({
              length: Math.ceil(displayData.length / eventsPerPage),
            }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          {displayData && (
            <Pagination.Next
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(displayData.length / eventsPerPage)
                  )
                )
              }
              disabled={
                currentPage === Math.ceil(displayData.length / eventsPerPage)
              }
            />
          )}
        </Pagination>
      </Row>
    </Container>
  );
}
