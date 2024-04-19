import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventList.style.css';

const EventList = ({ event }) => {
  const navigate = useNavigate();

  const moveToDetailPage = () => {
    navigate(`/detail/${event?.contentid}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className='list' onClick={moveToDetailPage}>
      <div
        style={{
          backgroundImage: 'url(' + `${event?.firstimage}` + ')',
        }}
        className='list-img'
      ></div>
      <div className='list-info'>
        <div>{event.title}</div>
        <div>
          {event.eventstartdate} ~ {event.eventenddate}
        </div>
        <div>{event.addr1}</div>
      </div>
    </div>
  );
};

export default EventList;
