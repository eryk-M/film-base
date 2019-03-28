export const GET_MOVIE_ACCOUNT_STATE = "GET_MOVIE_ACCOUNT_STATE";

export const getAccountState = (api, movieID, sessionID) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/account_states?api_key=${api}&session_id=${sessionID}

      `
    )
      .then(res => res.json())
      .then(movieState => {
        dispatch({
          type: GET_MOVIE_ACCOUNT_STATE,
          payload: movieState
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
