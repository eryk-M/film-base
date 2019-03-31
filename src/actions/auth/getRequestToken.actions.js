export const GET_REQUEST_TOKEN = "GET_REQUEST_TOKEN";

export const getRequestToken = api => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${api}
      `
    )
      .then(res => res.json())

      .then(requestToken => {
        localStorage.removeItem("token");
        localStorage.removeItem("expirationDate");
        const expirationDate = new Date(requestToken.expires_at);
        localStorage.setItem("token", requestToken.request_token);
        localStorage.setItem("expirationDate", expirationDate);
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

// export const logout = () => {
//   localStorage.removeItem('token');
//   localStorage.removeItem('expirationDate')
//   deleteSession()
// }

// export const authCheckStatus = () => {
//   return dispatch => {
//     const token = localStorage.getItem('token');
//     if(!token){
//       dispatch(logout())
//     } else {
//       const expirationDate = localStorage.getItem('expirationDate')
//       if(expirationDate > new Date()) {
//         dispatch(logout())
//       } else {

//       }
//     }

//   }
// }
