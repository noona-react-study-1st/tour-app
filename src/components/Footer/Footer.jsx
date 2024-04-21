import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Footer.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerMenuList = [
    '개인정보처리방침',
    '이용약관',
    '저작권정책',
    '고객서비스 헌장',
    '전자우편무단수집거부',
    'Q&A',
    '찾아오시는 길',
  ];

  return (
    <div className='footer'>
      <Navbar expand='lg' className='footer-nav'>
        <Container>
          <Navbar.Brand href='./' className='footer-notice'>
            관광 알려주는 누나
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='mo-toggle-btn'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='관광정보' id='basic-nav-dropdown'>
                <NavDropdown.Item
                  href='https://api.visitkorea.or.kr/#/'
                  target='_blank'
                >
                  TourAPI4.0
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='https://apis.map.kakao.com/web/'
                  target='_blank'
                >
                  카카오맵
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='https://www.data.go.kr/data/15084084/openapi.do'
                  target='_blank'
                >
                  날씨
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='유관기관' id='basic-nav-dropdown'>
                <NavDropdown.Item
                  href='https://www.youtube.com/channel/UCfBvs0ZJdTA43NQrnI9imGA'
                  target='_blank'
                >
                  코딩알려주는누나
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='footer-bottom'>
        <div className='sns-area'>
          <div>
            {' '}
            <FontAwesomeIcon icon={faYoutube} size='xl' />{' '}
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} size='xl' />
          </div>
          <div>
            <FontAwesomeIcon icon={faTiktok} size='xl' />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} size='xl' />
          </div>
        </div>
        <ul className='footer-menu-list'>
          {footerMenuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className='footer-info'></div>
        <div className='copyrights'>ⓒ관광알려주는누나</div>
      </Container>
    </div>
  );
};

export default Footer;
