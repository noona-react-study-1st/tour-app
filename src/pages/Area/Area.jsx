import { Container, Row } from 'react-bootstrap';
import CarouselSection from '../../components/CarouselSection/CarouselSection';
import CityDetailSection from '../../components/CityDetailSection/CityDetailSection';

export default function AreaPage() {
  return (
    <Container>
      <Row>
        <CarouselSection />
      </Row>
      <Row className='d-flex justify-content-center'>
        <CityDetailSection />
      </Row>
    </Container>
  );
}
