import Actions from "./action";
const axios = require("axios");
const fetchPriorities = () => {
  return dispatch => {
    dispatch(Actions.fetchTodoPrioritiesPending());
    axios
      .get("http://localhost:5000/api/priorities")
      .then(res => {
        return res.data;
      })
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(Actions.fetchTodoPrioritiesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(Actions.fetchTodoPrioritiesFailed(error));
      });
  };
};

const apiPriorityFuntion = { fetchPriorities };
export default apiPriorityFuntion;
