export const FETCH_TOP_MOVIES = "FETCH_TOP_MOVIES";

const api = "2a5d7298a94408e98274cd600f658034";

export const getTopMovies = () => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(topMovies => {
        dispatch({
          type: FETCH_TOP_MOVIES,
          payload: topMovies
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
