import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Footer.style.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Navbar expand='lg' className='footer-nav'>
        <Container>
          <Navbar.Brand href='#home' className='footer-notice'>
            관광 알려주는 누나
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='관광정보' id='basic-nav-dropdown'>
                <NavDropdown.Item href='https://api.visitkorea.or.kr/#/' target='_blank'>
                  TourAPI4.0
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3' target='_blank'>카카오맵</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3' target='_blank'>날씨</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='유관기관' id='basic-nav-dropdown'>
                <NavDropdown.Item href='https://www.youtube.com/channel/UCfBvs0ZJdTA43NQrnI9imGA' target='_blank'>
                  코딩알려주는누나
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='footer-bottom'>
        <div className='sns-area'>
          sns icon 네이버 페이스북 카카오 인스타 유튜브
        </div>
        <div className='footer-menu'>
          개인정보처리방침 이용약관 저작권정책 고객서비스 현장
          전자우편무단수집거부
        </div>
        <div className='footer-info'></div>
        <div className='copyrights'>ⓒ관광알려주는누나</div>
      </Container>
    </div>
  );
};

export default Footer;
