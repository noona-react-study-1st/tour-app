import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../utils/http';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Container } from 'react-bootstrap';
import ThemeCard from './Theme/ThemeCard';
import ThemeSlider from './Theme/ThemeSlider';
import './Theme/ThemePage.style.css';

const ThemePage = () => {
  const [selectedCat2, setSelectedCat2] = useState(null);
  const [selectedCat3, setSelectedCat3] = useState(null);
  const [cate, setCate] = useState([]);
  const [subCate, setSubCate] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoadingSubCate, setIsLoadingSubCate] = useState(false);
  const [isLoadingItems, setIsLoadingItems] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoadingSubCate(true);
    api
      .get('/categoryCode1', { params: { contentTypeId: 12, cat1: 'A02' } })
      .then((response) => {
        setCate(response.data.response.body.items.item);
        setIsLoadingSubCate(false);
      })
      .catch((err) => {
        setError('Error fetching 중분류');
        setIsLoadingSubCate(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCat2) {
      setIsLoadingSubCate(true);
      api
        .get('/categoryCode1', {
          params: { contentTypeId: 12, cat1: 'A02', cat2: selectedCat2 },
        })
        .then((response) => {
          setSubCate(response.data.response.body.items.item);
          setIsLoadingSubCate(false);
        })
        .catch((err) => {
          setError('Error fetching 소분류');
          setIsLoadingSubCate(false);
        });
    }
  }, [selectedCat2]);

  useEffect(() => {
    if (selectedCat3) {
      setIsLoadingItems(true);
      api
        .get('/areaBasedList1', {
          params: {
            contentTypeId: 12,
            cat1: 'A02',
            cat2: selectedCat2,
            cat3: selectedCat3,
            arrange: 'Q',
          },
        })
        .then((response) => {
          setItems(response.data.response.body.items.item);
          setIsLoadingItems(false);
        })
        .catch((err) => {
          setError('Error fetching 상세 리스트');
          setIsLoadingItems(false);
        });
    }
  }, [selectedCat3]);

  const handleCategoryClick = (cat2) => {
    setSelectedCat2(cat2);
    setSelectedCat3(null);
  };

  const handleSubCategoryClick = (cat3) => {
    setSelectedCat3(cat3);
  };

  const formatAddress = (address) => {
    return address.split(' ').slice(0, 3).join(' ');
  };

  const handleDetailClick = (contentId) => {
    navigate(`/detail/${contentId}`);
  };

  if (error) {
    return <p>{error}</p>;
  }

  // 산업관광 > 자동차 클릭 시 에러

  return (
    <Container>
      <ThemeSlider />
      <div className='theme-bt-container'>
        <div>
          {cate.map((category) => (
            <Button
              key={category.code}
              onClick={() => handleCategoryClick(category.code)}
              className='cate-bt'
            >
              {category.name}
            </Button>
          ))}
        </div>
        {selectedCat2 && (
          <div>
            {isLoadingSubCate ? (
              <p>Loading 소분류...</p>
            ) : (
              subCate.map((subCategory) => (
                <Button
                  key={subCategory.code}
                  onClick={() => handleSubCategoryClick(subCategory.code)}
                  className='sub-cate-bt'
                >
                  {subCategory.name}
                </Button>
              ))
            )}
          </div>
        )}
      </div>
      <div className='detail-div'>
        {selectedCat3 && (
          <Row>
            {isLoadingItems ? (
              <p>Loading 상세 리스트...</p>
            ) : (
              items.map((item) => (
                <Col md={6} lg={4} key={item.contentid}>
                  <ThemeCard
                    image={item.firstimage}
                    title={item.title}
                    address={formatAddress(item.addr1)}
                    onClick={() => handleDetailClick(item.contentid)}
                  />
                </Col>
              ))
            )}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default ThemePage;
