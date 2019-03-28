import { GET_MOVIE_FAVORITES } from "../../actions/userFavorites/movieFavorites.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_FAVORITES:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
