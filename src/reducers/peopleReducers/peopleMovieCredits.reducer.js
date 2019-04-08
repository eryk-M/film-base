import { PEOPLE_MOVIE_CREDITS } from "../../actions/peopleActions/peopleMovieCredits.actions";

let initialState = {
  cast: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_MOVIE_CREDITS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
