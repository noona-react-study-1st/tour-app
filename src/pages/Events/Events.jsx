import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Pagination } from 'react-bootstrap';
import { useFetchEventQuery } from '../../hooks/useFetchEvent';
import EventCard from '../Events/components/EventCard/EventCard';
import './Events.style.css';

export default function EventsPage() {
  let eventStartDate = '20230101';
  const { data } = useFetchEventQuery({ eventStartDate });
  const displayData = data?.items.item;

  // 페이지네이션을 위한 상태 변수
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  // 현재 페이지에 표시할 이벤트 카드 계산
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = displayData?.slice(indexOfFirstEvent, indexOfLastEvent);

  console.log('datatest2', currentEvents);

  // 페이지 변경 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {currentEvents &&
          currentEvents.map((event) => (
            <Col key={event.contentid} lg={4} xs={12}>
              <EventCard event={event} />
            </Col>
          ))}
      </Row>
      <Pagination>
        {displayData && (
          <Pagination.Prev
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          />
        )}
        {displayData &&
          Array.from({ length: Math.ceil(displayData.length / eventsPerPage) }).map((_, index) => (
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
              setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(displayData.length / eventsPerPage)))
            }
            disabled={currentPage === Math.ceil(displayData.length / eventsPerPage)}
          />
        )}
      </Pagination>
    </Container>
  );
}