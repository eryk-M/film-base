export const POST_SESSION_ID = "GET_REQUEST_TOKEN";

export const postSession = (api, requestToken) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=${api}
      `,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ request_token: requestToken })
      }
    )
      .then(res => res.json())
      .then(sessionID => {
        dispatch({
          type: POST_SESSION_ID,
          payload: sessionID
        });
        localStorage.setItem("session", sessionID.session_id);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
