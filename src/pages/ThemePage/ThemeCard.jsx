import React from 'react';
import Card from 'react-bootstrap/Card';

const ThemeCard = ({ image, title, address, onClick }) => {
  return (
    <div>
      <Card style={{ width: '18rem', height: '100%' }} onClick={onClick}>
        <Card.Img
          variant='top'
          src={image}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{address}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ThemeCard;
