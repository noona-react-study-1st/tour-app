import { useEffect, useState } from 'react';
import { useAreaStore } from '../../store/area';
import { useFetchAreaCodeQuery } from '../../hooks/useFetchAreaCode';
import { Spinner, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './CityDetailSection.style.css';
import { useWeatherStore } from '../../store/weather';
import { motion } from 'framer-motion';

export default function CityDetailSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { area, setSigunguCode } = useAreaStore();
  const { setSigungu } = useWeatherStore();

  const { data, isLoading, isError, error } = useFetchAreaCodeQuery(
    area.areaCode,
    area.totalCount
  );

  useEffect(() => {
    setIsOpen(false);
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  if (isLoading) {
    return (
      <section className='d-flex justify-content-center mt-5'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </section>
    );
  }
  if (isError) {
    return (
      <section className='d-flex justify-content-center'>
        <h1>{error.name}</h1>
        <span>{error.message}</span>
      </section>
    );
  }

  if (data) {
    return (
      <section className='city-detail-section'>
        <div className='city-detail-btn'>
          <h3>{area.name}</h3>
          <span>
            {((area.totalCount > 10 && !isMobile) ||
              (area.totalCount > 5 && isMobile)) && (
              <Button
                variant='outline-dark'
                onClick={() => setIsOpen((prev) => !prev)}
                style={{ border: 'none' }}
              >
                더보기
                {` `}
                {!isOpen && <FontAwesomeIcon icon={faChevronDown} />}
                {isOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </Button>
            )}
          </span>
        </div>
        <motion.ul layout className='city-detail-list'>
          {data.response.body.items.item.map((city, index) => {
            return (
              <motion.li
                layout
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${
                  !isMobile && city.rnum > 10 && !isOpen ? 'hidden' : ''
                }${isMobile && city.rnum > 5 && !isOpen ? 'hidden' : ''} ${
                  activeIndex === index && 'active'
                }`}
                key={city.rnum}
                onClick={() => {
                  setSigunguCode(city.code);
                  setSigungu(city.name);
                  setActiveIndex(index);
                }}
              >
                {city.name}
              </motion.li>
            );
          })}
        </motion.ul>
      </section>
    );
  }
}
