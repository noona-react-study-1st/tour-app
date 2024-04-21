import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { shareKakao } from "../../utils/sharekakao";
import kakaoLogo from "../../assets/detailImage/kakaoLogo.png";

const DetailShareModal = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const [toastOpen, setToastOpen] = useState(false);

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastOpen(true);
      // console.log("복사 성공!");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      alert("복사 실패!");
    }
  };

  return (
    <Modal
      className="shareModalWrap"
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="shareBox">
          <p>공유하기</p>
          <ul className="shareItem">
            <li
              onClick={() =>
                shareKakao(
                  `http://localhost:5173/detail/${props.contentId}`,
                  props.title
                )
              }
            >
              <span>
                <img className="kakaoLogo" src={kakaoLogo} alt={"Kakao Logo"} />
              </span>
              kakao
            </li>
            <li
              onClick={() =>
                handleCopyClipBoard(
                  `http://localhost:5173/detail/${props.contentId}`
                )
              }
            >
              <div className="copyIcon">
                <FontAwesomeIcon icon={faCopy} />
              </div>
              url 복사
            </li>
          </ul>
          <div className={`toastBox ${toastOpen ? "on" : ""}`}>
            url 이 복사되었습니다.
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DetailShareModal;
