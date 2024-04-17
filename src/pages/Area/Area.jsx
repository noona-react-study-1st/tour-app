import { Container, Row } from 'react-bootstrap';
import CarouselSection from '../../components/CarouselSection/CarouselSection';
// import { useFetchInfoByAreaQuery } from '../../hooks/useFetchInfoByArea';

export default function AreaPage() {
  // 지역별 관광 정보
  // const { data } = useFetchInfoByAreaQuery();
  // if (data) {
  //   console.log(data);
  // }
  return (
    <Container>
      <Row>
        <CarouselSection />
      </Row>
    </Container>
  );
}
