export const FETCH_GENRES = "FETCH_GENRES";

const api = "2a5d7298a94408e98274cd600f658034";

export const getGenres = () => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=en-US
      `
    )
      .then(res => res.json())
      .then(genres => {
        dispatch({
          type: FETCH_GENRES,
          payload: genres
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
