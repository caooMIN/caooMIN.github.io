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
  const [NNutrition, setNNutrition] = useState("");
  const [NPrep, setNPrep] = useState("");
  const [NCook, setNCook] = useState("");
  const [NIngredients, setNIngredients] = useState("");
  const dispatch = useDispatch();

  const foodData2 = {newId,newTitle,newImage,NDescription,NNutrition,NPrep,NCook,NIngredients}
  console.log(foodData2)
  const handleAdd = () => {
    
      dispatch(add_card({ id: newId, title: newTitle, image: newImage }));
      setNewId("");
      setNewTitle("");
      setNewImage("");
      handleClose()
    
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Card !      
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         <Modal.Title>Hi there</Modal.Title>
        </Modal.Header>

        <Form.Control  placeholder="id"  value={newId}  onChange={(e) => setNewId(e.target.value)}/>
        <Form.Control  placeholder="title"  value={newTitle}  onChange={(e) => setNewTitle(e.target.value)}/>
        <Form.Control  placeholder="image URL"  value={newImage} onChange={(e) => setNewImage(e.target.value)}/>
        <Form.Control placeholder="Description"  value={NDescription}  onChange={(e) => setNDescription(e.target.value)} />
        <Form.Control placeholder="Nutrition"  value={NNutrition}  onChange={(e) => setNNutrition(e.target.value)} />
        <Form.Control placeholder="Prep"  value={NPrep}  onChange={(e) => setNPrep(e.target.value)} />
        <Form.Control placeholder="Cook"  value={NCook}  onChange={(e) => setNCook(e.target.value)} />
        <Form.Control placeholder="Ingredients"  value={NIngredients}  onChange={(e) => setNIngredients(e.target.value)} />

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