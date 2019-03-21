import movies from "./upcoming.reducer";
import genres from "./genres.reducer";
import topMovies from "./topMovies.reducer";
import topPeople from "./topPeople.reducer";
import topTV from "./topTV.reducer";
import results from "./search.reducer";
import moviesDetails from "./moviesDetails.reducer";
import api from "./api.reducer";
import videos from "./videos.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movies,
  genres,
  topMovies,
  topPeople,
  topTV,
  results,
  moviesDetails,
  api,
  videos
});

export default rootReducer;
