import { FETCH_TOP_PEOPLE } from "../actions/topPeople.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_PEOPLE:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
