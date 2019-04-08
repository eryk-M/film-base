import { MOVIE_EXTERNAL } from "../../actions/MovieActions/movieExternal.actions";

let initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_EXTERNAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
