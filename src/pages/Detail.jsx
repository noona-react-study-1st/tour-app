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
  const { contentId } = useParams();
  // console.log(contentId);
  const [commonData, setCommonData] = useState();
  const [contentTypeId, setContentTypeId] = useState();

  const [areaCode, setAreaCode] = useState();

  const { data, isLoading, isError } = useFetchDetailCommonQuery(contentId);

  useEffect(() => {
    if (!isLoading && !isError) {
      setCommonData(data.response.body.items.item?.[0]);
      setContentTypeId(data.response.body.items.item[0].contenttypeid);
      setAreaCode(data.response.body.items.item[0].areacode);
    }
  }, [data, isLoading, isError]);
  console.log("effect out", areaCode);

  const [modalShow, setModalShow] = useState(false);

  console.log("commonData : ", commonData, "contentTypeId", contentTypeId);

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
    <Container fluid="lg" className="py-4 detailPageWrap">
      {commonData && <WeatherBanner areaCode={areaCode} />}
      <Row>
        <h2>{commonData?.title}</h2>
      </Row>

      <Row ref={content1Ref}>
        {commonData && <DetailBanner contentTypeId={contentTypeId} />}
      </Row>

      <ul className="detailNav">
        <li onClick={onContent1Click}>소개</li>
        <li onClick={onContent2Click}>상세 정보</li>
        <li onClick={onContent3Click}>찾아가는길</li>
        <li onClick={() => setModalShow(true)}>사진 보기</li>
        <li className="shortMenu">
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span>
            <FontAwesomeIcon icon={faPrint} />
          </span>
          <span>
            <FontAwesomeIcon icon={faShareNodes} />
          </span>
        </li>
      </ul>
      <div ref={content2Ref} className="py-4">
        {commonData && <DetailOverView commonData={commonData} />}
      </div>
      <div className="py-4">
        {commonData && <DetailIntro contentTypeId={contentTypeId} />}
        {commonData && <DetailInfo contentTypeId={contentTypeId} />}
      </div>
      <div ref={content3Ref} className="py-4">
        {commonData && (
          <DetailMap
            coordX={commonData.mapx}
            coordY={commonData.mapy}
            title={commonData.title}
          />
        )}
      </div>
      <DetailModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}
