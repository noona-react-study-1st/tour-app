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
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">공유하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <li>
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
