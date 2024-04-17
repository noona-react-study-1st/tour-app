import {useParams} from 'react-router-dom';
import {useFetchDetailCommonQuery} from '../hooks/useFetchDetailCommon';
import {Alert, Spinner} from 'react-bootstrap';

export default function DetailPage() {
  const {contentId} = useParams();
  console.log(contentId);
  const {data, isLoading, isError, error} = useFetchDetailCommonQuery(contentId);
  console.log(data, isLoading);
  if (data) {
    console.log(data);
  }
  if (isLoading) {
    return (
      <div className='loading-box'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (isError) {
    return (
      <div className='loading-box'>
        <Alert variant='dark' bg='dark' data-bs-theme='dark'>
          {error.message}
        </Alert>
      </div>
    );
  }
  return <>Detail page</>;
}
