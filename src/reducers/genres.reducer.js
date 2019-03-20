import { FETCH_GENRES } from "../actions/genres.actions";

let initialState = {
  genres: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
