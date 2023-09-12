import { ADD_CARD, DELETE_CARD, EDIT_CARD } from './ActionsTypes';

export const add_card = (card) => {
  return{
    type: ADD_CARD,
    payload: card,
  }
};

export const edit_card = (id, title, image) => {
  return {
    type: EDIT_CARD,
  payload:{ id, title, image}
  }
};

export const delete_card = id => {
  return {
    type: DELETE_CARD,
  payload: id,
  }
};
