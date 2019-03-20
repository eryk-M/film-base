export const FETCH_UPCOMING = "FETCH_UPCOMING";

const api = "2a5d7298a94408e98274cd600f658034";

export const getUpcoming = () => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(movies => {
        dispatch({
          type: FETCH_UPCOMING,
          payload: movies
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
