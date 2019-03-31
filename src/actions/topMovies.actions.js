export const FETCH_TOP_MOVIES_BEGIN = "FETCH_TOP_MOVIES_BEGIN";
export const FETCH_TOP_MOVIES_SUCCESS = "FETCH_TOP_MOVIES_SUCCESS";
export const FETCH_TOP_MOVIES_FAILURE = "FETCH_TOP_MOVIES_FAILURE";

export const getTopMovies = (api, page) => {
  return dispatch => {
    dispatch({ type: FETCH_TOP_MOVIES_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=${page}`
    )
      .then(res => res.json())
      .then(topMovies => {
        if (topMovies.success === false) {
          alert(topMovies.status_message);
          dispatch({
            type: FETCH_TOP_MOVIES_FAILURE,
            payload: topMovies.status_message
          });
        } else {
          dispatch({
            type: FETCH_TOP_MOVIES_SUCCESS,
            payload: topMovies
          });
        }
      });
  };
};
