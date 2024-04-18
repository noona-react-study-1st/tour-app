import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ThemePage from './pages/Theme';
import AreaPage from './pages/Area';
import EventsPage from './pages/Events/Events';
import DetailPage from './pages/Detail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {index: true, element: <HomePage />},
        {path: '/theme', element: <ThemePage />},
        {path: '/area', element: <AreaPage />},
        {path: '/events', element: <EventsPage />},
        {path: 'detail/:contentId', element: <DetailPage />},
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
