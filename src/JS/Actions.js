import { ADD_CARD, DELETE_CARD, EDIT_CARD } from './ActionsTypes';

export const add_card = (card) => ({
  type: ADD_CARD,
  payload: card,
});

export const edit_card = (id, newText, newImage) => ({
  type: EDIT_CARD,
  payload:{ id, newText, newImage},
});

export const delete_card = (id) => ({
  type: DELETE_CARD,
  payload: id,
});
