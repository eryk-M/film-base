export const FETCH_TOP_PEOPLE_BEGIN = "FETCH_TOP_PEOPLE_BEGIN";
export const FETCH_TOP_PEOPLE_SUCCESS = "FETCH_TOP_PEOPLE_SUCCESS";
export const FETCH_TOP_PEOPLE_FAILURE = "FETCH_TOP_PEOPLE_FAILURE";
export const getTopPeople = (api, page) => {
  return dispatch => {
    dispatch({ type: FETCH_TOP_PEOPLE_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${api}&language=en-US&page=${page}`
    )
      .then(res => res.json())
      .then(topPeople => {
        if (topPeople.success === false) {
          alert(topPeople.status_message);
          dispatch({
            type: FETCH_TOP_PEOPLE_FAILURE
          });
        } else {
          dispatch({
            type: FETCH_TOP_PEOPLE_SUCCESS,
            payload: topPeople
          });
        }
      })
      .catch(err => {
        alert(err);
      });
  };
};
