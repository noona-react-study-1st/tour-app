import {useParams} from 'react-router-dom';
import {useFetchDetailCommonQuery} from '../hooks/useFetchDetailCommon';
import {Alert, Button, Spinner} from 'react-bootstrap';
import {useFetchDetailIntroQuery} from '../hooks/useFetchDetailIntro';
import {useFetchDetailInfoQuery} from '../hooks/useFetchDetailInfo';
import {useFetchDetailImageQuery} from '../hooks/useFetchDetailImage';

export default function DetailPage() {
  const {contentId} = useParams();
  console.log(contentId);
  // const {
  //   data: commonData,
  //   isLoading: commonLoading,
  //   isError: commonIsError,
  //   error: commonError,
  // } = useFetchDetailCommonQuery(contentId);

  // const {
  //   data: introData,
  //   isLoading: introLoading,
  //   isError: introIsError,
  //   error: introError,
  // } = useFetchDetailIntroQuery(contentId);

  // const {
  //   data: infoData,
  //   isLoading: infoLoading,
  //   isError: infoIsError,
  //   error: infoError,
  // } = useFetchDetailInfoQuery(contentId);

  // const {
  //   data: imageData,
  //   isLoading: imageLoading,
  //   isError: imageIsError,
  //   error: imageError,
  // } = useFetchDetailImageQuery(contentId);

  // console.log(' commonData -', commonData, ' introData-', introData, ' infoData -', infoData, ' imageData-', imageData);

  // if (commonLoading) {
  //   return (
  //     <div className='loading-box'>
  //       <Spinner animation='border' role='status'>
  //         <span className='visually-hidden'>Loading...</span>
  //       </Spinner>
  //     </div>
  //   );
  // }
  // if (commonIsError) {
  //   return (
  //     <div className='loading-box'>
  //       <Alert variant='dark' bg='dark' data-bs-theme='dark'>
  //         {commonError.message}
  //       </Alert>
  //     </div>
  //   );
  // }
  return (
    <>
      Detail page
      <Button variant='primary'>Test</Button>
      <p className='text-primary'>test</p>
    </>
  );
}
