import { useRouteError } from 'react-router-dom';
import '../pages/SearchPage/Common.style.css';
import MainNavigation from '../components/MainNavigation/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong...';

  if (error.code === 500) {
    message = error.data.message;
  }

  if (error.code === 404) {
    title = 'Not found!';
    message = 'Could not find resources or pages';
  }

  return (
    <div>
      <MainNavigation />
      <main className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </div>
  );
};

export default ErrorPage;
