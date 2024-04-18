import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Pagination, Button } from 'react-bootstrap';
import { useFetchEventQuery } from '../../hooks/useFetchEvent';
import { useFetchEventCarouselQuery } from '../../hooks/useFetchEventCarousel';
import EventCarousel from '../Events/components/EventCarousel/EventCarousel';
import EventSearch from '../Events/components/EventSearch/EventSearch';
import EventCard from '../Events/components/EventCard/EventCard';
import './Events.style.css';

export default function EventsPage() {
  let eventStartDate = '20200101';
  const eventsPerPage = 6;

  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortedLatestData, setSortedLatestData] = useState(null);
  const [sortedEarliestData, setSortedEarliestData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useFetchEventQuery({ eventStartDate, pageNo });
  const { data : images , isLoading : imgIsLoading } = useFetchEventCarouselQuery({ eventStartDate });

  const handleSortLatest = () => {
    if (
      data &&
      data.response &&
      data.response.body &&
      data.response.body.items &&
      data.response.body.items.item
    ) {
      const sortedData = [...data.response.body.items.item].sort(
        (a, b) => new Date(b.eventstartdate) - new Date(a.eventstartdate)
      );
      setSortedLatestData(sortedData);
      setSortedEarliestData(null);
      setCurrentPage(1);
    }
  };

  const handleSortEarliest = () => {
    if (
      data &&
      data.response &&
      data.response.body &&
      data.response.body.items &&
      data.response.body.items.item
    ) {
      const sortedData = [...data.response.body.items.item].sort(
        (a, b) => new Date(a.eventstartdate) - new Date(b.eventstartdate)
      );
      setSortedEarliestData(sortedData);
      setSortedLatestData(null);
      setCurrentPage(1);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (
      data &&
      data.response &&
      data.response.body &&
      data.response.body.items &&
      data.response.body.items.item
    ) {
      const sortedLatestData = [...data.response.body.items.item].sort(
        (a, b) => new Date(b.eventstartdate) - new Date(a.eventstartdate)
      );
      setSortedLatestData(sortedLatestData);
      setCurrentPage(1);
    }
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortedLatestData, sortedEarliestData]);

  const displayData =
    sortedLatestData ||
    sortedEarliestData ||
    (data &&
      data.response &&
      data.response.body &&
      data.response.body.items &&
      data.response.body.items.item);

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
        <EventSearch />
        <Col>
          <Button variant='danger' onClick={handleSortLatest}>
            최신순
          </Button>
          <Button variant='danger' onClick={handleSortEarliest}>
            오래된순
          </Button>
        </Col>
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
