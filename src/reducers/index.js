import movies from "./upcoming.reducer";
import genres from "./genres.reducer";
import topMovies from "./topMovies.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movies,
  genres,
  topMovies
});

export default rootReducer;
