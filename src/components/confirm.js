import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';

function Confirm(props) {

  console.log(props.data);
 const history = useHistory();

  const postData = async(e) => {
      e.preventDefault();
        history.push(`login`)
  }

    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="bg-light confirm_header py-1">
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="confirm_title">Confirm</p> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to continue ?</p>
          <div className="text-center confirm_btn">
            <Button onClick={props.onHide} className="btn-danger my-3">
              <i className="fas fa-times"></i>          
            </Button>
            <Button className="btn-success" onClick={postData}>
              <i className="fas fa-check"></i>
            </Button>
          </div>
        </Modal.Body>
        
      </Modal>
    );
  }
 
export default Confirm;    