import {
  FETCH_SUCCESS,
  FETCH_SUBMIT,
  FETCH_FAILURE,
  POST_SMURF,
  SMURF_FAILURE,
  SMURF_SUCCESS,
  EDIT,
  DELETE_SMURF
} from "../actions/smurfActions";

export const initialState = {
  smurfs: [],
  loading: false,
  posting: false,
  error: "",
  success: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBMIT:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        smurfs: [...state.smurfs, action.payload],
        error: ""
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case POST_SMURF:
      return {
        ...state,
        posting: true
      };
    case SMURF_SUCCESS:
      return {
        ...state,
        posting: false,
        smurfs: [[...action.payload]]
      };
    case SMURF_FAILURE:
      return {
        ...state,
        error: action.payload.toString()
      };
    case EDIT:
      return {
        ...state,
        smurfs: [[...action.payload]],
        error: ""
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: [[...action.payload]],
        error: ""
      };
    default:
      return state;
  }
};
