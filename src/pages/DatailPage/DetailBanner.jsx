import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchDetailImageQuery } from "../../hooks/useFetchDetailImage";
import { RotatingSquare } from "react-loader-spinner";

const DetailBanner = () => {
  const [imgData, setImgData] = useState();
  const { contentId } = useParams();

  const { data, isLoading, isError } = useFetchDetailImageQuery(contentId);

  useEffect(() => {
    if (!isLoading && !isError) {
      setImgData(data.response.body.items.item);
    }
  }, [data, isLoading, isError]);

  // console.log(isLoading, imgData);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  if (isLoading) {
    <div className="detailBannerItem">
      <div className="image loading">
        <RotatingSquare
          visible={true}
          height="100"
          width="100"
          color="#dedeff"
          ariaLabel="rotating-square-loading"
          wrapperStyle={{}}
          wrapperClass="loading"
        />
      </div>
    </div>;
  }

  return (
    <>
      {imgData && (
        <div className="detailBannerItem no-print">
          <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            itemClass="detailBannerItem"
            responsive={responsive}
            arrows={false}
            showDots={true}
          >
            {imgData.map((image, index) => (
              <div
                className="image"
                key={index}
                style={{
                  backgroundImage: `url(${image.originimgurl})`,
                }}
              ></div>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default DetailBanner;
