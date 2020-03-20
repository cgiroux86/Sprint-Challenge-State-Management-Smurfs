import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSmurfs } from "../redux/actions/smurfActions";
import Smurfs from "../components/Smurfs";

const SmurfForms = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const [state, setState] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  return (
    <>
      <form>
        <label>Name</label>
        <input
          onChange={handleChanges}
          type="text"
          name="name"
          value={state.name}
        ></input>
        <label>Age</label>
        <input
          onChange={handleChanges}
          type="text"
          name="age"
          value={state.age}
        ></input>
        <label>Height</label>
        <input
          onChange={handleChanges}
          type="text"
          name="height"
          value={state.height}
        ></input>
        <button
          onClick={e => {
            e.preventDefault();
            dispatch(postSmurfs(state));
            setState({
              name: "",
              age: "",
              height: ""
            });
          }}
        >
          Add Smurf
        </button>
      </form>
      <Smurfs state={state} setState={setState} />
      {error.length > 0 && <p className="error">{error}</p>}
    </>
  );
};

export default SmurfForms;
