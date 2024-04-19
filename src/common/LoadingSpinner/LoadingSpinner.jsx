import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import './LoadingSpinner.style.css';

const LoadingSpinner = () => {
  return (
    <Container justify-content-md className='loading-area'>
      <Spinner animation='border' role='status'></Spinner>
    </Container>
  );
};

export default LoadingSpinner;
