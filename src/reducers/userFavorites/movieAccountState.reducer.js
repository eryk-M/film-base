import { GET_MOVIE_ACCOUNT_STATE } from "../../actions/userFavorites/movieAccountState.actions";

let initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_ACCOUNT_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
