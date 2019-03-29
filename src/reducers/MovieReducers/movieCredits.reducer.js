import { MOVIE_CREDITS } from "../../actions/MovieActions/movieCredits.actions";

let initialState = {
  cast: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_CREDITS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
