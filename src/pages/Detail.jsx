import {useParams} from 'react-router-dom';
import {useFetchDetailCommonQuery} from '../hooks/useFetchDetailCommon';
import {Alert, Container, Row, Spinner} from 'react-bootstrap';
import {useFetchDetailIntroQuery} from '../hooks/useFetchDetailIntro';
import {useFetchDetailInfoQuery} from '../hooks/useFetchDetailInfo';
import {useFetchDetailImageQuery} from '../hooks/useFetchDetailImage';
import DetailBanner from './DatailPage/DetailBanner';
import './DatailPage/DetailPage.style.css';
import DetailOverView from './DatailPage/DetailOverView';
import DetailIntro from './DatailPage/DetailIntro';
import DetailMap from './DatailPage/DetailMap';
import {useRef, useState} from 'react';
import DetailModal from './DatailPage/DetailModal';
import DetailInfo from './DatailPage/DetailInfo';

export default function DetailPage() {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);

  const onContent1Click = () => {
    content1Ref.current?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  };
  const onContent2Click = () => {
    content2Ref.current?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  };
  const onContent3Click = () => {
    content3Ref.current?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  };
  const {contentId} = useParams();
  console.log(contentId);
  const {
    data: commonData,
    isLoading: commonLoading,
    isError: commonIsError,
    error: commonError,
  } = useFetchDetailCommonQuery(contentId);

  const {
    data: introData,
    isLoading: introLoading,
    // isError: introIsError,
    // error: introError,
  } = useFetchDetailIntroQuery(contentId, commonData?.[0]?.contenttypeid);

  const {
    data: infoData,
    isLoading: infoLoading,
    // isError: infoIsError,
    // error: infoError,
  } = useFetchDetailInfoQuery(contentId, commonData?.[0]?.contenttypeid);

  const {
    data: imageData,
    isLoading: imageLoading,
    // isError: imageIsError,
    // error: imageError,
  } = useFetchDetailImageQuery(contentId);

  console.log(' commonData -', commonData, ' introData-', introData, ' infoData -', infoData, ' imageData-', imageData);
  console.log(commonData && commonData[0].contenttypeid);

  const [modalShow, setModalShow] = useState(false);

  if (commonLoading || introLoading || infoLoading || imageLoading) {
    return (
      <div className='loading-box'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (commonIsError) {
    return (
      <div className='loading-box'>
        <Alert variant='dark' bg='dark' data-bs-theme='dark'>
          {commonError.message}
        </Alert>
      </div>
    );
  }

  return (
    <Container fluid='lg' className='py-4'>
      <Row ref={content1Ref}>{imageData && <DetailBanner images={imageData} />}</Row>
      <Row>
        <h2>{commonData?.[0].title}</h2>
      </Row>
      <ul className='detailNav'>
        <li onClick={onContent1Click}>소개</li>
        <li onClick={onContent2Click}>상세 정보</li>
        <li onClick={onContent3Click}>찾아가는길</li>
        <li onClick={() => setModalShow(true)}>사진 보기</li>
      </ul>
      <div className='py-4'>{commonData && <DetailOverView commonData={commonData[0]} />}</div>
      <div ref={content2Ref} className='py-4'>
        {infoData && <DetailInfo infoData={infoData[0]} />}
        {introData && <DetailIntro introData={introData[0]} />}
      </div>
      <div ref={content3Ref} className='py-4'>
        {commonData && (
          <DetailMap coordX={commonData[0].mapx} coordY={commonData[0].mapy} title={commonData?.[0].title} />
        )}
      </div>
      <DetailModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}
