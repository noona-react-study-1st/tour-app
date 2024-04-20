import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.style.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치를 감지하여 버튼을 보이거나 숨깁니다.
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
}

export default ScrollToTopButton;
