import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import './EventSearch.style.css';

const EventSearch = () => {
  return (
    <div className='search-area'>
      <Dropdown>
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
          시기
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
          지역
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
          카테고리
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant='primary'>리셋</Button>{' '}
      <Button variant='primary'>검색</Button>
    </div>
  );
};

export default EventSearch;
