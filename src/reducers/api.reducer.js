import { GET_API } from "../actions/api.actions";

const api = "2a5d7298a94408e98274cd600f658034";

let initialState = {
  api
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
