import movies from "./upcoming.reducer";
import genres from "./genres.reducer";
import topMovies from "./topMovies.reducer";
import topPeople from "./topPeople.reducer";
import topTV from "./topTV.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movies,
  genres,
  topMovies,
  topPeople,
  topTV
});

export default rootReducer;
