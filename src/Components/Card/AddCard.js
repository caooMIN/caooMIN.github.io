import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add_card } from '../../JS/Actions';

const AddCard = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    
      dispatch(add_card({ id: Math.random(), title: newTitle, image: newImage }));
      setNewTitle("");
      setNewImage("");
    
  };

  return (
    <div>
      <Form.Control
        placeholder="title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <Form.Control
        placeholder="image URL"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
      />
      <Button variant="info" onClick={()=> handleAdd()}>
        Add
      </Button>
    </div>
  );
};

export default AddCard;
