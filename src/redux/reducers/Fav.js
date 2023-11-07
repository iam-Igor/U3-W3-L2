import { ADD_TO_FAV } from "../actions";
import { REMOVE_JOB } from "../actions";

const initialState = {
  content: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_JOB:
      return {
        ...state,
        content: state.content.filter((job, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favReducer;
