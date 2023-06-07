import avatar from "/images/default-profile-pic.jpg"
import { useState } from 'react';
import { ModalBody } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const IDCards = (props) => {
  console.log(props)
  //Modal state
  const [smShow, setSmShow] = useState(false);

  return (
    <div className="outer-id-card">
      <div className='inner-id-card'>
        <img className="avatar-for-search" src={avatar} />
        <div className='card--stats'>
            <p className='id--fullName'>{props.firstName} {props.lastName}</p>
            <p>{props.email}</p>
            <Button style={{color: 'gray'}}variant='link' onClick={() => setSmShow(true)}
              className='me-2'>
                    More Info
              </Button>

          <Modal 
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="contained-modal-title-vcenter" centered>
              
            <Modal.Header closeButton>
              <Modal.Title>
                {props.firstName} {props.lastName}
              </Modal.Title>
            </Modal.Header>
            <ModalBody>
              <p className='id--degree'>{props.degree}</p>
              <p>{props.additionalInfo}</p>
              <p>{props.experience}</p>
              <p>{props.achievments}</p>
              <p>{props.skills}</p>
            </ModalBody>
          </Modal>
        
        </div>
      </div>
    </div>
  )
}
