import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';
import { useFetchEventQuery } from '../../hooks/useFetchEvent';
import { useFetchEventCarouselQuery } from '../../hooks/useFetchEventCarousel';
import EventCarousel from '../Events/components/EventCarousel/EventCarousel';
import EventCard from '../Events/components/EventCard/EventCard';
import renderPagination from '../Events/components/EventPagination/renderPagination'; 
import EventRecommendSlide from '../Events/components/EventSlider/EventRecommendSlide'
import ScrollToTopButton from "../../common/ScrollToTop/ScrollToTopButton"
import './Events.style.css';

const EventsPage = () => {
  const eventStartDate = '20200101';
  const eventsPerPage = 6;

  const [cardCurrentPage, setCardCurrentPage] = useState(1);
  const [listCurrentPage, setListCurrentPage] = useState(1);
  const [arrange, setArrange] = useState('O');
  const [selectedMenu, setSelectedMenu] = useState('축제');

  const { data, isLoading, isError, error } = useFetchEventQuery({
    eventStartDate,
    arrange,
  });
  const {
    data: images,
    isLoading: isImgLoading,
    isError: isImgError,
  } = useFetchEventCarouselQuery({
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

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
    if (menu === '축제') {
      setCardCurrentPage(1);
    } else {
      setListCurrentPage(1);
    }
  };

  const handleCardPaginate = (pageNumber) => {
    setCardCurrentPage(pageNumber);
  };

  const handleListPaginate = (pageNumber) => {
    setListCurrentPage(pageNumber);
  };

  const displayData =
    data &&
    data.response &&
    data.response.body &&
    data.response.body.items &&
    data.response.body.items.item;

  const currentFestivals = displayData
    ? displayData
        .filter((event) => event.cat2 === 'A0207')
        .slice(
          (cardCurrentPage - 1) * eventsPerPage,
          cardCurrentPage * eventsPerPage
        )
    : [];

  const currentEvents = displayData
    ? displayData
        .filter((event) => event.cat2 === 'A0208')
        .slice(
          (listCurrentPage - 1) * eventsPerPage,
          listCurrentPage * eventsPerPage
        )
    : [];

  if (isLoading || isImgLoading) {
    return (
      <div className='loading-box'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (isError || isImgError)  {
    return (
      <div className='loading-box'>
        <Alert variant='dark' bg='dark' data-bs-theme='dark'>
          {error.message}
        </Alert>
      </div>
    );
  }

  //<EventCarousel images={images} />

  return (
    <Container>
      <Row>
      <EventRecommendSlide/>
      </Row>
      <Row>
        <div className='sub-menu'>
          <div
            className={selectedMenu === '축제' ? 'selected-sub-menu' : ''}
            onClick={() => handleMenuSelect('축제')}
          >
            축제
          </div>
          <div
            className={selectedMenu === '공연/행사' ? 'selected-sub-menu' : ''}
            onClick={() => handleMenuSelect('공연/행사')}
          >
            공연/행사
          </div>
        </div>
      </Row>
      <Row>
        <div className='arrange-area'>
          <div
            className={arrange === 'O' ? 'selected-sort' : ''}
            onClick={handleNameSort}
          >
            이름순
          </div>
          <div
            className={arrange === 'Q' ? 'selected-sort' : ''}
            onClick={handleLatestSort}
          >
            최신순
          </div>
          <div
            className={arrange === 'R' ? 'selected-sort' : ''}
            onClick={handleOldestSort}
          >
            오래된순
          </div>
        </div>
      </Row>
      {selectedMenu === '축제' ? (
        <div>
          <Row className='card-area'>
            {currentFestivals.map((event) => (
              <Col key={event.contentid} lg={4} md={6} xs={12}>
                <EventCard event={event} />
              </Col>
            ))}
          </Row>
          {renderPagination(
            cardCurrentPage,
            handleCardPaginate,
            displayData.filter((event) => event.cat2 === 'A0207').length,
            eventsPerPage
          )}
        </div>
      ) : (
        <div>
          <Row className='card-area'>
            {currentEvents.map((event) => (
              <Col key={event.contentid} lg={4} md={6} xs={12}>
                <EventCard event={event} />
              </Col>
            ))}
          </Row>
          {renderPagination(
            listCurrentPage,
            handleListPaginate,
            displayData.filter((event) => event.cat2 === 'A0208').length,
            eventsPerPage
          )}
        </div>
      )}
      <ScrollToTopButton/>
    </Container>
  );
};

export default EventsPage;
