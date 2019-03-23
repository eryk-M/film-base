export const FETCH_PEOPLE_DETAILS = "FETCH_PEOPLE_DETAILS";

export const getPeopleDetails = (person_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/person/${person_id}?api_key=${api}&language=en-US
      `
    )
      .then(res => res.json())
      .then(peopleDetails => {
        dispatch({
          type: FETCH_PEOPLE_DETAILS,
          payload: peopleDetails
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
