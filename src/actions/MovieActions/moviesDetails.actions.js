export const FETCH_MOVIES_DETAILS = "FETCH_MOVIES_DETAILS";

export const getMovieDetails = (movie_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api}&language=en-US`
    )
      .then(res => res.json())
      .then(moviesDetails => {
        dispatch({
          type: FETCH_MOVIES_DETAILS,
          payload: moviesDetails
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
