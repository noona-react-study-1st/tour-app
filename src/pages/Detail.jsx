import {useParams} from 'react-router-dom';
import {useFetchDetailCommonQuery} from '../hooks/useFetchDetailCommon';
import {Alert, Spinner} from 'react-bootstrap';
import {useFetchDetailIntroQuery} from '../hooks/useFetchDetailIntro';

export default function DetailPage() {
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
    isError: introIsError,
    error: introError,
  } = useFetchDetailIntroQuery(contentId);

  console.log(commonData, introData);

  if (commonLoading) {
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
  return <>Detail page</>;
}
