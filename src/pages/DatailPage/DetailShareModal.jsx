import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useEffect } from "react";
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

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      console.log("복사 성공!");
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
            kakao
            <span>
              <img className="kakaoLogo" src={kakaoLogo} alt={"Kakao Logo"} />
            </span>
          </li>
          <li
            onClick={() =>
              handleCopyClipBoard(
                `http://localhost:5173/detail/${props.contentId}`
              )
            }
          >
            url 복사
            <div>
              <FontAwesomeIcon icon={faCopy} />
            </div>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default DetailShareModal;
