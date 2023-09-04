import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { delete_card, edit_card } from '../../JS/Actions';
import { Button, Modal, Form } from 'react-bootstrap';

const CardCard = ({ food }) => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(food.title);

  const handleDelete = () => {
    dispatch(delete_card(food.id));
  };
  const handleEditSubmit = () => {
    const updatedCard = {
      ...food,
      title: editedTitle,
    };

    dispatch(edit_card(updatedCard)); 
    setShowEditModal(false);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }} className='goat'>
        <Card.Title>{food.title}</Card.Title>
        <Link to={`/food/${food.id}`} key={food.id}>
          <Card.Img className='img' variant="top" src={food.image} />
        </Link>
        <div className="button-container">
          <Button
            className="edit-button"
            onClick={() => setShowEditModal(true)}
          >
            Edit
          </Button>

          <Button
            className="delete-button"
            onClick={() => dispatch(delete_card(food.id))}
          >
            Delete
          </Button>
        </div>
      </Card>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardCard;
