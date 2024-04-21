import MainBanner from '../components/MainBanner/MainBanner'
import MainThemeSlide from '../components/MainThemeSlide/MainThemeSlide';
import MainAreaSlide from '../components/MainAreaSlide/MainAreaSlide'
import MainEventsSlide from '../components/MainEventsSlide/MainEventsSlide';
import MainWeather from '../components/MainWeather/MainWeather';
import ScrollToTop from '../common/ScrollToTop/ScrollToTopButton'

export default function HomePage() {
  return <>
  <MainBanner/>
  <MainThemeSlide/>
  <MainAreaSlide/>
  <MainEventsSlide/>
  <MainWeather/>
  <ScrollToTop/>
  </>;
}
