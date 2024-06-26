import { Row } from 'react-bootstrap';
import CarouselSection from '../../components/CarouselSection/CarouselSection';
import CityDetailSection from '../../components/CityDetailSection/CityDetailSection';
import { contentTypeId } from '../../constants/area';
import CardList from '../../components/CardList/CardList';
import WeatherSection from '../../components/WeatherSection/WeatherSection';
import ScrollToTopButton from '../../common/ScrollToTop/ScrollToTopButton';

export default function AreaPage() {
  return (
    <main>
      <CarouselSection />
      <Row className='d-flex justify-content-center'>
        <CityDetailSection />
      </Row>
      <Row className='d-flex justify-content-center mt-4'>
        <WeatherSection />
      </Row>
      <Row className='d-flex justify-content-center'>
        <CardList contentTypeId={contentTypeId.tour} />
      </Row>
      <Row className='d-flex justify-content-center'>
        <CardList contentTypeId={contentTypeId.food} />
      </Row>
      <Row className='d-flex justify-content-center mb-5'>
        <CardList contentTypeId={contentTypeId.sleep} />
      </Row>
      <ScrollToTopButton />
    </main>
  );
}
