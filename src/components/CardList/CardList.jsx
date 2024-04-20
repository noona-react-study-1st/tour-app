import { Button, Card, Placeholder } from 'react-bootstrap';
import { useFetchInfoByAreaQuery } from '../../hooks/useFetchInfoByArea';
import { useAreaStore } from '../../store/area';
import './CardList.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardList({ contentTypeId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const { area } = useAreaStore();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const { data, isLoading, isError, error } = useFetchInfoByAreaQuery({
    areaCode: area.areaCode,
    sigunguCode: area.sigunguCode,
    contentTypeId,
    numOfRows: 8,
    pageNo,
  });

  useEffect(() => {
    setPageNo(1);
    setIsOpen(false);
  }, [area]);

  useEffect(() => {
    if (data) {
      if (pageNo === 1) {
        setItems(data.response.body.items.item);
      } else {
        setItems((prevItems) => [
          ...prevItems,
          ...data.response.body.items.item,
        ]);
      }
    }
  }, [data, pageNo]);

  let contentType = '';

  if (contentTypeId === 12) contentType = '추천 여행지';
  if (contentTypeId === 32) contentType = '추천 숙박';
  if (contentTypeId === 39) contentType = '추천 맛집';

  function getAddress(address) {
    const addressArr = address.split(' ');
    return `${addressArr[0]} ${addressArr[1]}`;
  }

  /* 카드 리스트가 들어갈 React Node */
  let content;

  /* 현재 페이지가 1이고 로딩중일 때 카드의 스켈레톤 */
  if (isLoading && pageNo === 1) {
    content = new Array(4).fill(0).map((item, index) => (
      <li key={index}>
        <Card>
          <div className='img-skeleton' />
          <Card.Body>
            <Placeholder as={Card.Title} animation='glow'>
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      </li>
    ));
  }

  /* 현재 페이지가 1보다 크고 로딩중일 경우, 기존의 데이터 + 추가적인 로딩 스켈톤톤 */
  if (isLoading && pageNo > 1) {
    const existingItems = items.slice(0, 8 * (pageNo - 1));

    content = (
      <>
        {existingItems.map((item) => (
          <li key={item.contentid}>
            <Card onClick={() => navigate(`/detail/${item.contentid}`)}>
              {item.firstimage2 ? (
                <Card.Img src={item.firstimage2} />
              ) : (
                <div className='img-skeleton' />
              )}
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{getAddress(item.addr1)}</Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
        {new Array(8).fill(0).map((item, index) => (
          <li key={index}>
            <Card>
              <div className='img-skeleton' />
              <Card.Body>
                <Placeholder as={Card.Title} animation='glow'>
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation='glow'>
                  <Placeholder xs={8} />
                </Placeholder>
              </Card.Body>
            </Card>
          </li>
        ))}
      </>
    );
  }

  if (isError) {
    content = <p>{error.message}</p>;
  }

  if (data && data?.response.body.totalCount > 0) {
    const renderedItems = isOpen ? items : items.slice(0, 4);

    content = renderedItems.map((item) => (
      <li key={item.contentid}>
        <Card onClick={() => navigate(`/detail/${item.contentid}`)}>
          {item.firstimage2 ? (
            <Card.Img src={item.firstimage2} />
          ) : (
            <div className='img-skeleton' />
          )}
          <Card.Body>
            <Card.Title>
              {item.title.length < 11
                ? item.title
                : item.title.substring(0, 11) + '...'}
            </Card.Title>
            <Card.Text>{getAddress(item.addr1)}</Card.Text>
          </Card.Body>
        </Card>
      </li>
    ));
  }

  return (
    <div className='card-list-section'>
      <div className='d-flex justify-content-between px-3 align-items-end'>
        <span className='fs-4'>
          <strong>{area.name}</strong> {contentType}
        </span>
        {data?.response.body.totalCount > 4 && (
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
      </div>
      <ul className='area-card-list'>{content}</ul>
      {isOpen && data?.response.body.totalCount > 8 && (
        <span className='d-flex justify-content-center'>
          {items.length < data?.response.body.totalCount && (
            <Button
              variant='outline-secondary'
              onClick={() => setPageNo((prev) => prev + 1)}
            >
              <FontAwesomeIcon icon={faPlus} /> 더보기
            </Button>
          )}
        </span>
      )}
    </div>
  );
}
