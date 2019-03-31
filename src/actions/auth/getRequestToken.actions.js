export const GET_REQUEST_TOKEN = "GET_REQUEST_TOKEN";

export const getRequestToken = api => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${api}
      `
    )
      .then(res => res.json())

      .then(requestToken => {
        dispatch({
          type: GET_REQUEST_TOKEN,
          payload: requestToken
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
