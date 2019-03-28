export const GET_TV_FAVORITES = "GET_TV_FAVORITES";

export const getTVFavorites = (api, accountID, sessionID) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/account/${accountID}/favorite/tv?api_key=${api}&session_id=${sessionID}&language=en-US&sort_by=created_at.asc&page=1
      `
    )
      .then(res => res.json())
      .then(TVFavorites => {
        dispatch({
          type: GET_TV_FAVORITES,
          payload: TVFavorites
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
