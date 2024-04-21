import { useEffect, useState } from "react";
import { useFetchInfoByAreaQuery } from "../../hooks/useFetchInfoByArea";

import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";

const AreaBasedSlide = ({ areaCode, sigungucode }) => {
  const [items, setItems] = useState();
  const { data, isLoading, isError } = useFetchInfoByAreaQuery({
    areaCode: areaCode,
    sigunguCode: sigungucode,
  });
  useEffect(() => {
    if (!isLoading && !isError) {
      const dataCut = data.response.body.items.item.slice(0, 10);
      // setItems(data.response.body.items.item);
      setItems(dataCut);
    }
  }, [data, isLoading, isError]);
  console.log("area based", data, items);
  const navigate = useNavigate();
  const goToDetailPage = (contentId) => {
    navigate(`/detail/${contentId}`);
    window.scrollTo(0, 0);
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="areaBasedSlideWrap py-4 no-print">
      <h3>주변 정보</h3>
      {items && (
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          itemClass="areaBasedSlider"
          responsive={responsive}
          arrows={false}
          showDots={true}
        >
          {items?.map((itme, index) => (
            <div
              className="image mx-2"
              key={index}
              style={{
                backgroundImage: `url(${itme.firstimage})`,
              }}
              onClick={() => goToDetailPage(itme?.contentid)}
            >
              <h4>{itme.title}</h4>
              <p>{itme.addr1}</p>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default AreaBasedSlide;
