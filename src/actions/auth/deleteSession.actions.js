export const DELETE_SESSION = "DELETE_SESSION";

export const deleteSession = (api, session) => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/authentication/session?api_key=${api}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE",
        body: JSON.stringify({ session_id: session })
      }
    )
      .then(res => res.json())

      .then(del_session => {
        dispatch({
          type: DELETE_SESSION,
          payload: del_session
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
