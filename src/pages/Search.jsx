import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom'; // useLocation import 추가
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';
import { useFetchSearchQuery } from '../hooks/useFetchSearch';
import SearchCard from '../pages/SearchPage/SearchCard';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const keyword = encodeURIComponent(query.get('q'));
  console.log('keyword', keyword);

  const { data, isLoading, isError, error } = useFetchSearchQuery(keyword);

  return (
    <Container>
      <Row className='card-area'>
        {data?.map((data) => (
          <Col key={data.contentid} lg={4} md={6} xs={12}>
            <SearchCard data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchPage;
