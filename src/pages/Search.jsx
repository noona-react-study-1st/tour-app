import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom'; 
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';
import { useFetchSearchQuery } from '../hooks/useFetchSearch';
import LoadingSpinner from '../common/LoadingSpinner/LoadingSpinner';
import SearchCard from '../pages/SearchPage/SearchCard';

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
      {!data && !isLoading && <p>{keyword} 검색 결과가 없습니다.</p>}
      {data && data.length > 0 && (
        <Row className='card-area'>
          {data.map((data) => (
            <Col key={data.contentid} lg={4} md={6} xs={12}>
              <SearchCard data={data} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};


export default SearchPage;
