export const FETCH_MOVIES_DETAILS = "FETCH_MOVIES_DETAILS";

const api = "2a5d7298a94408e98274cd600f658034";

export const getMovieDetails = movie_id => {
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
        console.log(err);
      });
  };
};
