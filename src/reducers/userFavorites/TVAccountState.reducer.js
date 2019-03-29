import { GET_TV_ACCOUNT_STATE } from "../../actions/userFavorites/TVAccountState.actions";

let initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TV_ACCOUNT_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
