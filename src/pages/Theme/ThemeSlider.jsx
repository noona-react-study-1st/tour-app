import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import ThemeSliderCard from './ThemeSliderCard';
import styles from './ThemeSlider.module.css';

const ThemeSlider = ({ onClick }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const cards = [
    {
      imageUrl:
        'http://tong.visitkorea.or.kr/cms/resource/62/1946562_image2_1.jpg',
      promoText: '전통과 문화가 살아 숨쉬는 곳',
      title: '민속마을',
      cat2: 'A0201',
      cat3: 'A02010600',
    },
    {
      imageUrl:
        'http://tong.visitkorea.or.kr/cms/resource/78/2639278_image2_1.jpg',
      promoText: '자연 속 힐링 공간',
      title: '치유의 숲',
      cat2: 'A0202',
      cat3: 'A02020500',
    },
    {
      imageUrl:
        'http://tong.visitkorea.or.kr/cms/resource/15/2802615_image2_1.jpg',
      promoText: '상상력이 현실이 되는 곳',
      title: '과학 체험관',
      cat2: 'A0204',
      cat3: 'A02040900',
    },
    {
      imageUrl:
        'http://tong.visitkorea.or.kr/cms/resource/61/2795361_image2_1.jpg',
      promoText: '피로 회복이 필요하다면',
      title: '이색 찜질방',
      cat2: 'A0202',
      cat3: 'A02020400',
    },
  ];

  return (
    <div className={styles.themeSlider}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass='theme-carousel-container'
        // dotListClass='custom-dot-list-style'
        itemClass={styles.themeCarouselItem}
      >
        {cards.map((card, index) => (
          <ThemeSliderCard
            key={index}
            imageUrl={card.imageUrl}
            promoText={card.promoText}
            title={card.title}
            cat2={card.cat2}
            cat3={card.cat3}
            onClick={onClick}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ThemeSlider;
