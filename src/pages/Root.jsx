import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation/MainNavigation';
import Footer from '../components/Footer/Footer';

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
}
