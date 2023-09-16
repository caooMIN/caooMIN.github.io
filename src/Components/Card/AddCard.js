import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add_card } from '../../JS/Actions';

export const newId = ""; 
export const foodData2 = [];

const AddCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState("");
  const [NDescription, setNDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    
      dispatch(add_card({ id: newId || Math.random(), title: newTitle || "Default Title",rate:1, image: newImage || 'https://i.pinimg.com/236x/56/4c/09/564c092842aa0773635a0b10df56bb9a.jpg' ,description:NDescription }));
      setNewId("");
      setNewTitle("");
      setNewImage("");
      handleClose()
    
  };

  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        Add New Card !      
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Hi there</Modal.Title>
        </Modal.Header>

        <Form.Control placeholder="id"  value={newId}  onChange={(e) => setNewId(e.target.value)}/>
        <Form.Control placeholder="title"  value={newTitle}  onChange={(e) => setNewTitle(e.target.value)}/>
        <Form.Control placeholder="image URL"  value={newImage} onChange={(e) => setNewImage(e.target.value)}/>
        <Form.Control placeholder="Description"  value={NDescription}  onChange={(e) => setNDescription(e.target.value)} />

        <Button variant="info" onClick={()=> handleAdd()}>
        Add
      </Button>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default AddCard;