import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.style.css';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const moveToDetailPage = () => {
    navigate(`/detail/${event?.contentid}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className='event-card' onClick={moveToDetailPage}>
      <div
        style={{
          backgroundImage: 'url(' + `${event?.firstimage}` + ')',
        }}
        className='event-img'
      ></div>
      <div className='event-info'>
        <p>{event.title}</p>
        <div>
          {event.eventstartdate} ~ {event.eventenddate}
        </div>
        <a>{event.addr1}</a>
      </div>
    </div>
  );
};

export default EventCard;
