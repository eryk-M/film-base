import { MOVIE_REVIEWS } from "../../actions/MovieActions/movieReviews.actions";

let initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_REVIEWS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
