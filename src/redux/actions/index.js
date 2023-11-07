export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_JOB = "REMOVE_JOB";
export const GET_JOBS = "GET_JOBS";

export const addTofavourites = (param) => {
  return {
    type: ADD_TO_FAV,
    payload: param,
  };
};

export const removeFromFavourites = (param) => {
  return {
    type: REMOVE_JOB,
    payload: param,
  };
};

export const searchJobs = (param) => {
  return async (dispatch) => {
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=";

      const response = await fetch(baseEndpoint + param + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
