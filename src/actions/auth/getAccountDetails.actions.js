export const GET_ACCOUNT_DETAILS = "GET_ACCOUNT_DETAILS";

export const getAccountDetails = (api, session) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/account?api_key=${api}&session_id=${session}

      `
    )
      .then(res => res.json())
      .then(accountDetails => {
        dispatch({
          type: GET_ACCOUNT_DETAILS,
          payload: accountDetails
        });
        localStorage.setItem("user_id", accountDetails.id);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
