import { useParams } from "react-router-dom";
import { useFetchDetailCommonQuery } from "../hooks/useFetchDetailCommon";
import { Container, Placeholder, Row } from "react-bootstrap";
import DetailBanner from "./DatailPage/DetailBanner";
import "./DatailPage/DetailPage.style.css";
import DetailOverView from "./DatailPage/DetailOverView";
import DetailMap from "./DatailPage/DetailMap";
import { useEffect, useRef, useState } from "react";
import DetailModal from "./DatailPage/DetailModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPrint,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { RotatingSquare } from "react-loader-spinner";
import WeatherBanner from "./DatailPage/WeatherBanner";
import DetailIntro from "./DatailPage/DetailIntro";
import DetailInfo from "./DatailPage/DetailInfo";
import AreaBasedSlide from "./DatailPage/AreaBasedSlide";
import DetailShareModal from "./DatailPage/DetailShareModal";
import DetailPetTour from "./DatailPage/DetailPetTour";
import ScrollToTopButton from "../common/ScrollToTop/ScrollToTopButton";

export default function DetailPage() {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);

  const onContent1Click = () => {
    content1Ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  console.log(content1Ref);
  const onContent2Click = () => {
    content2Ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const onContent3Click = () => {
    content3Ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  useEffect(() => {
    const observer1 = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const observer2 = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const observer3 = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (content1Ref.current) observer1.observe(content1Ref.current);
    if (content2Ref.current) observer2.observe(content2Ref.current);
    if (content3Ref.current) observer3.observe(content3Ref.current);

    return () => {
      if (content1Ref.current) observer1.unobserve(content1Ref.current);
      if (content2Ref.current) observer2.unobserve(content2Ref.current);
      if (content3Ref.current) observer3.unobserve(content3Ref.current);
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(`Content area ${entry.target.id} is entered`);
        // Perform actions when the content area is entered
      } else {
        console.log(`Content area ${entry.target.id} is exited`);
        // Perform actions when the content area is exited
      }
    });
  };
  const { contentId } = useParams();
  // console.log(contentId);
  const [commonData, setCommonData] = useState();
  const [contentTypeId, setContentTypeId] = useState();

  const [areaCode, setAreaCode] = useState();
  const [sigungucode, setSigungucode] = useState();
  const { data, isLoading, isError } = useFetchDetailCommonQuery(contentId);

  useEffect(() => {
    if (!isLoading && !isError) {
      setCommonData(data.response.body.items.item?.[0]);
      setContentTypeId(data.response.body.items.item[0].contenttypeid);
      setAreaCode(data.response.body.items.item[0].areacode);
      setSigungucode(data.response.body.items.item[0].sigungucode);
    }
  }, [data, isLoading, isError]);
  console.log("effect out", areaCode);

  const [modalShow, setModalShow] = useState(false);
  const [shareModalShow, setShareModalShow] = useState(false);

  console.log("commonData : ", commonData, "contentTypeId", contentTypeId);

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    <Container fluid="lg" className="py-4">
      <Row>
        <Placeholder animation="glow">
          <Placeholder xs={4} />
        </Placeholder>
      </Row>
      <Row>
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
        </div>
      </Row>
    </Container>;
  }
  return (
    <Container fluid="lg" className="detailPageWrap">
      {commonData && (
        <WeatherBanner
          areaCode={areaCode}
          lon={commonData.mapx}
          lat={commonData.mapy}
        />
      )}
      <Row ref={content1Ref} id="content01">
        <h2 className="no-print">{commonData?.title}</h2>
      </Row>

      <Row>{commonData && <DetailBanner title={commonData?.title} />}</Row>

      <ul className="detailNav no-print">
        <li onClick={onContent1Click}>소개</li>
        <li onClick={onContent2Click}>상세 정보</li>
        <li onClick={onContent3Click}>찾아가는길</li>
        {/* <li onClick={() => setModalShow(true)}>사진 보기</li> */}
        <li className="shortMenu">
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span onClick={handlePrint}>
            <FontAwesomeIcon icon={faPrint} />
          </span>
          <span onClick={() => setShareModalShow(true)}>
            <FontAwesomeIcon icon={faShareNodes} />
          </span>
        </li>
      </ul>
      <div ref={content2Ref} className="py-4" id="content02">
        {commonData && <DetailOverView commonData={commonData} />}
      </div>
      <div className="py-4">
        {commonData && <DetailIntro contentTypeId={contentTypeId} />}
        {commonData && <DetailInfo contentTypeId={contentTypeId} />}
        {commonData && <DetailPetTour contentTypeId={contentTypeId} />}
      </div>
      <div ref={content3Ref} className="py-4" id="content03">
        {commonData && (
          <DetailMap
            coordX={commonData.mapx}
            coordY={commonData.mapy}
            title={commonData.title}
          />
        )}
      </div>
      <div>
        {commonData && (
          <AreaBasedSlide areaCode={areaCode} sigungucode={sigungucode} />
        )}
      </div>
      <DetailModal show={modalShow} onHide={() => setModalShow(false)} />
      <DetailShareModal
        show={shareModalShow}
        onHide={() => setShareModalShow(false)}
        contentId={contentId}
        title={commonData?.title}
      />
      <ScrollToTopButton />
    </Container>
  );
}
