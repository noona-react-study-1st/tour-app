import { faComment, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";

const DetailShareModal = (props) => {
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
          <li>
            kakao
            <FontAwesomeIcon icon={faComment} />
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
