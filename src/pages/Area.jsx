import { Button } from 'react-bootstrap';
import { useFetchInfoByAreaQuery } from '../hooks/useFetchInfoByArea';

export default function AreaPage() {
  // 지역별 관광 정보
  const { data } = useFetchInfoByAreaQuery();
  if (data) {
    console.log(data);
  }
  return (
    <>
      <Button>Test</Button>
    </>
  );
}
