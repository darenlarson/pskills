import axios from "axios";

export const GET_LINKED_START = "GET_LINKED_START";
export const GET_LINKED_SUCCESS = "GET_LINKED_SUCCESS";
export const GET_LINKED_FAILURE = "GET_LINKED_FAILURE";
export const ADD_WORKER_START = "ADD_WORKER_START";
export const ADD_WORKER_SUCCESS = "ADD_WORKER_SUCCESS";
export const ADD_WORKER_FAILURE = "ADD_WORKER_FAILURE";
export const UPDATE_WORKER_START = "UPDATE_WORKER_START";
export const UPDATE_WORKER_SUCCESS = "UPDATE_WORKER_SUCCESS";
export const UPDATE_WORKER_FAILURE = "UPDATE_WORKER_FAILURE";
export const DELETE_WORKER_START = "DELETE_WORKER_START";
export const DELETE_WORKER_SUCCESS = "DELETE_WORKER_SUCCESS";
export const DELETE_WORKER_FAILURE = "DELETE_WORKER_FAILURE";
export const ADD_PRISON_START = "ADD_PRISON_START";
export const ADD_PRISON_SUCCESS = "ADD_PRISON_SUCCESS";
export const ADD_PRISON_FAILURE = "ADD_PRISON_FAILURE";

const PrisonUrl = "https://prisoner-skills-backend.herokuapp.com/api/prisons";
const ServerUrl = "https://prisoner-skills-backend.herokuapp.com/api/prisoners";
const LinkedProfiles =
  "https://prisoner-skills-backend.herokuapp.com/api/prisoners/prison";

export const getLinkedWorkers = prisonId => dispatch => {
  dispatch({ type: GET_LINKED_START });
  axios
    .get(`${LinkedProfiles}/${prisonId}`)
    .then(res => {
      dispatch({ type: GET_LINKED_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_LINKED_FAILURE, payload: err });
    });
};

export const addWorker = (workerdata, authToken) => dispatch => {
  dispatch({ type: ADD_WORKER_START });
  axios({
    url: ServerUrl,
    method: "POST",
    data: workerdata,
    headers: {
      Authorization: authToken
    }
  })
    .then(res => {
      dispatch({ type: ADD_WORKER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_WORKER_FAILURE, payload: err });
    });
};

export const updateWorker = (workerdata, id, authToken) => dispatch => {
  dispatch({ type: UPDATE_WORKER_START });
  axios({
    url: `${ServerUrl}/${id}`,
    method: "PUT",
    data: workerdata,
    headers: {
      Authorization: authToken
    }
  })
    .then(res => {
      dispatch({ type: UPDATE_WORKER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_WORKER_FAILURE, payload: err });
    });
};

export const deleteWorker = (id, authToken) => dispatch => {
  dispatch({ type: DELETE_WORKER_START });
  axios({
    url: `${ServerUrl}/${id}`,
    method: "DELETE",
    headers: {
      Authorization: authToken
    }
  })
    .then(res => {
      dispatch({ type: DELETE_WORKER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_WORKER_FAILURE, payload: err });
    });
};

export const addPrison = (prisondata, authToken) => dispatch => {
  dispatch({ type: ADD_PRISON_START });
  axios({
    url: PrisonUrl,
    method: "POST",
    data: prisondata,
    headers: {
      Authorization: authToken
    }
  })
    .then(res => {
      dispatch({ type: ADD_PRISON_SUCCESS, payload: prisondata });
    })
    .catch(err => {
      dispatch({ type: ADD_PRISON_FAILURE, payload: err });
    });
};
