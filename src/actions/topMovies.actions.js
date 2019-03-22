export const FETCH_TOP_MOVIES = "FETCH_TOP_MOVIES";

export const getTopMovies = (api, page) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=${page}`
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
