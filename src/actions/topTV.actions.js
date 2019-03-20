export const FETCH_TOP_TV = "FETCH_TOP_TV";

const api = "2a5d7298a94408e98274cd600f658034";

export const getTopTV = () => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${api}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(topTV => {
        dispatch({
          type: FETCH_TOP_TV,
          payload: topTV
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
