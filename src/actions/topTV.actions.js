export const FETCH_TOP_TV = "FETCH_TOP_TV";

export const getTopTV = (api, page) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${api}&language=en-US&page=${page}`
    )
      .then(res => res.json())
      .then(topTV => {
        dispatch({
          type: FETCH_TOP_TV,
          payload: topTV
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
