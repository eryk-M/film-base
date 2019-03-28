import { GET_TV_FAVORITES } from "../../actions/userFavorites/TVFavorites.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TV_FAVORITES:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
