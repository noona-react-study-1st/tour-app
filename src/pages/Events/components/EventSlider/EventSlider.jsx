import React from 'react';
import Carousel from 'react-multi-carousel';
import EventList from '../EventList/EventList';
import 'react-multi-carousel/lib/styles.css';
import './EventSlider.style.css';

const EventSlider = ({ title, events, responsive }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
      >
        {events.map((event) => (
          <EventList event={event} />
        ))}
      </Carousel>
    </div>
  );
};

export default EventSlider;
