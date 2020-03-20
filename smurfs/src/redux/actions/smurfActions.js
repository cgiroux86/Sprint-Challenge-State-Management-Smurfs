import Axios from "axios";
export const FETCH_SUBMIT = "FETCH_SUBMIT";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const POST_SMURF = "POST_SMURF";
export const SMURF_SUCCESS = "SMURF_SUCCESSS";
export const SMURF_FAILURE = "SMURF_FAILURE";
export const DELETE_SMURF = "DELETE_SMURF";
export const EDIT = "EDIT";

export const fetchSubmit = () => {
  return {
    type: FETCH_SUBMIT
  };
};

export const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  };
};

export const fetchFailure = err => {
  return {
    type: FETCH_FAILURE,
    payload: err
  };
};

export const fetchData = () => dispatch => {
  dispatch(fetchSubmit());
  Axios.get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch(fetchSuccess(res.data));
      console.log(res);
    })
    .catch(err => {
      dispatch(fetchFailure(err));
      console.log(err.message);
    });
};

export const postSmurf = input => {
  return {
    type: POST_SMURF,
    payload: input
  };
};

export const smurfSuccess = res => {
  return {
    type: SMURF_SUCCESS,
    payload: res
  };
};

export const smurfFailure = error => {
  return { type: SMURF_FAILURE, payload: error };
};

export const deleteSmurf = smurf => {
  return {
    type: DELETE_SMURF,
    payload: smurf
  };
};

export const postSmurfs = smurf => dispatch => {
  dispatch(postSmurf());
  Axios.post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch(smurfSuccess(res.data));
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      dispatch(smurfFailure(err.message));
    });
};

export const deleteSmurfs = smurf => dispatch => {
  Axios.delete(`http://localhost:3333/smurfs/${smurf}`)
    .then(res => dispatch(deleteSmurf(res.data)))
    .catch(err => console.log(err.message));
};

export const edit = smurf => {
  return {
    type: EDIT,
    payload: smurf
  };
};

export const editSmurf = (smurf, id) => dispatch => {
  Axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => dispatch(edit(res.data)))
    .catch(err => console.log(err.message));
};
