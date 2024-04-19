import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.style.css';

const SearchCard = ({ data }) => {
  const navigate = useNavigate();

  const moveToDetailPage = () => {
    navigate(`/detail/${data?.contentid}`);
    window.scrollTo(0, 0);
  };

  console.log("searchdata",data)

  return (
    <div className='event-card' onClick={moveToDetailPage}>
      <div
        style={{
          backgroundImage: 'url(' + `${data?.firstimage}` + ')',
        }}
        className='event-img'
      ></div>
      <div className='event-info'>
        <div>{data?.title}</div>
        <div>{data?.addr1}</div>
      </div>
    </div>
  );
};

export default SearchCard;
