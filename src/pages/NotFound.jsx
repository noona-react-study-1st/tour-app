import React from 'react';
import img from '../assets/etc/thinking.png';
import "../pages/SearchPage/Common.style.css"

const NotFoundPage = () => {
  return (
    <div className='no-result'>
      <div className='centered-content'>
        <h1>404 - Not Found</h1>
        <img src={img} alt='No result' />
        <p>페이지가 존재하지 않습니다.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
