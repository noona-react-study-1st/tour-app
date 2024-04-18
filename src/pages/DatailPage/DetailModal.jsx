import {Modal} from 'react-bootstrap';
import DetailBanner from './DetailBanner';

const DetailModal = (props) => {
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>사진보기</Modal.Title>
      </Modal.Header>
      <Modal.Body>photo slide</Modal.Body>
    </Modal>
  );
};
export default DetailModal;
