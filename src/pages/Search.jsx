import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';
import { useFetchSearchQuery } from '../hooks/useFetchSearch';
import LoadingSpinner from '../common/LoadingSpinner/LoadingSpinner';
import SearchCard from '../pages/SearchPage/SearchCard';
import img from '../assets/etc/sad.png';
import "../pages/SearchPage/Search.style.css"

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const keyword = query.get('q');
  console.log('keyword', keyword);

  const { data, isLoading, isError, error } = useFetchSearchQuery(keyword);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      {isLoading && <Spinner animation='border' />}
      {isError && <Alert variant='danger'>{error}</Alert>}
      {!data && !isLoading && (
        <div className="no-result">
           <div className="centered-content">
          <img src={img} alt='No result' />
          <p>'{keyword}' 검색 결과가 없습니다.</p>
           </div>
        </div>
      )}
      {data && data.length > 0 && (
        <Row className='card-area'>
          {data.map((item) => (
            <Col key={item.contentid} lg={4} md={6} xs={12}>
              <SearchCard data={item} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchPage;
