import { useAreaStore } from '../../store/area';
import { useFetchAreaCodeQuery } from '../../hooks/useFetchAreaCode';
import { Spinner, Button } from 'react-bootstrap';
import './CityDetailSection.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function CityDetailSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { area, setSigunguCode } = useAreaStore();

  const { data, isLoading, isError, error } = useFetchAreaCodeQuery(
    area.areaCode,
    area.totalCount
  );

  useEffect(() => {
    setIsOpen(false);
  }, [data]);

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
            {area.totalCount > 10 && (
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
        <ul className='city-detail-list'>
          {data.response.body.items.item.map((city) => {
            return (
              <li
                className={`${city.rnum > 10 && !isOpen ? 'hidden' : ''}`}
                key={city.rnum}
                onClick={() => setSigunguCode(city.code)}
              >
                {city.name}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
