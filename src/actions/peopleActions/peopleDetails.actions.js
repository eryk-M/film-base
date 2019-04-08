export const FETCH_PEOPLE_DETAILS_BEGIN = "FETCH_PEOPLE_DETAILS_BEGIN";
export const FETCH_PEOPLE_DETAILS_SUCCESS = "FETCH_PEOPLE_DETAILS_SUCCESS";
export const FETCH_PEOPLE_DETAILS_FAILURE = "FETCH_PEOPLE_DETAILS_FAILURE";

export const getPeopleDetails = (person_id, api) => {
  return dispatch => {
    dispatch({ type: FETCH_PEOPLE_DETAILS_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/person/${person_id}?api_key=${api}&language=en-US
      `
    )
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          dispatch({
            type: FETCH_PEOPLE_DETAILS_FAILURE
          });
        }
      })
      .then(res => res.json())
      .then(peopleDetails => {
        dispatch({
          type: FETCH_PEOPLE_DETAILS_SUCCESS,
          payload: peopleDetails
        });
      })
      .catch(err => console.log(err));
  };
};
