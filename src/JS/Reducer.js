import { ADD_CARD, DELETE_CARD, EDIT_CARD } from "./ActionsTypes";
import { foodData } from "../Data";

const initialState = {
  listCards: [], 
};

export const cardReducer = (state = initialState,{type, payload}) => {
  switch (type) {
    case "POPULATE_TASKS": {
      return {
        ...state,
        listCards: foodData.map(card => ({
          id: card.id,
          text: card.title,
          description: card.description,
        })),
      };
      
    }
    case DELETE_CARD:
      return {
        ...state,
        listCards: state.listCards.filter((card) => card.id !== payload),
      };
    case ADD_CARD:
      return {
        ...state,
        listCards: [...state.listCards, payload],
      };
    case EDIT_CARD:
      return {
        ...state,
        listCards: state.listCards.map((card) =>
          card.id === payload.id
            ? { ...card, title: payload.title }
            : card
        ),
      };
    default:
      return state;
  }
};
