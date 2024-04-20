import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MainNavigation.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import tourLogo from '../../assets/mainlmage/tourLogo.png'

export default function MainNavigation() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    if (keyword.trim() !== '') {
      navigate(`/search?q=${keyword}`);
    }
  };

  return (
    <Navbar expand='lg' className='nav-area' sticky='top'>
      <Container>
        <Navbar.Brand href='/' className='logo'>
          <img
            src={tourLogo}
            width={280}
            style={{marginRight:'30px'}}
            alt='logo'
            className='mo-logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' className='mo-toggle-btn' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0 nav'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/theme' className='menu-item'>테마</Nav.Link>
            <Nav.Link href='/area'>지역</Nav.Link>
            <Nav.Link href='/events'>행사</Nav.Link>
          </Nav>
          <Form className='d-flex' onSubmit={searchByKeyword}>
            <Form.Control
              type='search'
              placeholder='어떤 여행을 원하시나요?'
              className='search-input'
              aria-label='Search'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className='search-btn' type='submit'>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
