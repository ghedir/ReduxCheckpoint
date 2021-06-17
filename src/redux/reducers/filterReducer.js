import { TOGGLE_FILTER } from "../actions/todoTypes";

const filterReducer = (state = "All", { type, payload }) => {
  switch (type) {
    case TOGGLE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default filterReducer;
