import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ThemePage from './pages/Theme';
import AreaPage from './pages/Area/Area';
import EventsPage from './pages/Events/Events';
import DetailPage from './pages/Detail';
import SearchPage from './pages/Search';
import LoginPage from './pages/Login';
import ErrorPage from './pages/Error';
import NotFoundPage from './pages/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/theme', element: <ThemePage /> },
        { path: '/area', element: <AreaPage /> },
        { path: '/events', element: <EventsPage /> },
        { path: 'detail/:contentId', element: <DetailPage /> },
        { path: '/search', element: <SearchPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
