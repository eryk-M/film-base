export const FETCH_DISCOVER = "FETCH_DISCOVER";

export const getDiscover = (api, type, page) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=${type}&include_adult=false&include_video=false&page=${page}`
    )
      .then(res => res.json())
      .then(discover => {
        dispatch({
          type: FETCH_DISCOVER,
          payload: discover
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
