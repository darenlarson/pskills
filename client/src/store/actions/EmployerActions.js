import axios from "axios"

export const GET_PRISONS_START = "GET_PRISONS_START"
export const GET_PRISONS_SUCCESS = "GET_PRISONS_SUCCESS"
export const GET_PRISONS_FAILURE = "GET_PRISONS_FAILURE"
export const GET_WORKERS_START = "GET_WORKERS_START"
export const GET_WORKERS_SUCCESS = "GET_WORKERS_SUCCESS"
export const GET_WORKERS_FAILURE = "GET_WORKERS_FAILURE" 

const PrisonUrl = "https://prisoner-skills-backend.herokuapp.com/api/prisons";

export const getPrisons = () => dispatch => {
    dispatch({ type: GET_PRISONS_START })
    axios
    .get(`${PrisonUrl}`)
    .then(res => dispatch({ type: GET_PRISONS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_PRISONS_FAILURE, payload: err}))
}

export const getPrisonsWorkers = (id) => dispatch => {
    console.log("getting workers", id)
    dispatch({ type: GET_WORKERS_START })
    axios
    .get(`${PrisonUrl}/${id}`)
    .then(res => dispatch({ type: GET_WORKERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_WORKERS_FAILURE, payload: err }))
}