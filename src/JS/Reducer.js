import { ADD_CARD, DELETE_CARD, EDIT_CARD } from "./ActionsTypes";
import { foodData } from "../Data";

const initialState = {
  foodData  
};

export const cardReducer = (state = initialState,{type, payload}) => {
  
  switch (type) {
    case DELETE_CARD:
      return {
        ...state,
        foodData: state.foodData.filter((card) => card.id !== payload),
      };

    case ADD_CARD:
      return {
        ...state,
        foodData: [...state.foodData, payload],
      };

    case EDIT_CARD:
      return {
        ...state,
        foodData: state.foodData.map((card) =>
          card.id === payload.id
            ? { ...card, title: payload.title, image: payload.image }
            : card
        ),
      };
    default:
      return state;
  }
};
