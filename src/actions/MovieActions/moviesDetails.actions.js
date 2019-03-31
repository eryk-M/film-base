export const FETCH_MOVIES_DETAILS_BEGIN = "FETCH_MOVIES_DETAILS_BEGIN";
export const FETCH_MOVIES_DETAILS_SUCCESS = "FETCH_MOVIES_DETAILS_SUCCESS";
export const FETCH_MOVIES_DETAILS_FAILURE = "FETCH_MOVIES_DETAILS_FAILURE";

export const getMovieDetails = (movie_id, api) => {
  return dispatch => {
    dispatch({ type: FETCH_MOVIES_DETAILS_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api}&language=en-US`
    )
      .then(res => {
        if (res.ok) {
          console.log(res);
          return res;
        } else {
          dispatch({
            type: FETCH_MOVIES_DETAILS_FAILURE
          });
        }
      })
      .then(res => res.json())
      .then(moviesDetails => {
        dispatch({
          type: FETCH_MOVIES_DETAILS_SUCCESS,
          payload: moviesDetails
        });
      })
      .catch(err => console.log(err));
  };
};
