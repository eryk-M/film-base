export const GET_TV_ACCOUNT_STATE = "GET_TV_ACCOUNT_STATE";

export const getTVAccountState = (api, tv_id, sessionID) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/account_states?api_key=${api}&session_id=${sessionID}

      `
    )
      .then(res => res.json())
      .then(TVState => {
        dispatch({
          type: GET_TV_ACCOUNT_STATE,
          payload: TVState
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
