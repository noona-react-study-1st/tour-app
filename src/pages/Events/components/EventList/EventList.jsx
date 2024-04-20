import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventList.style.css';

const EventList = ({ event }) => {
  console.log("eventList", event)
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
      >
        <div className='list-info'>{event.title}</div>
        <div className='list-info-hover'>
          <div className="title">{event.title}</div>
          <div>{event.addr1}</div>
          <div>{event.eventstartdate}~{event.eventenddate}</div>
          <div>{event.tel}</div>
          </div>
      </div>
    </div>
  );
};

export default EventList;
