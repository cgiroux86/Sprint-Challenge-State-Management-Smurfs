import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, deleteSmurfs } from "../redux/actions/smurfActions";
import { editSmurf } from "../redux/actions/smurfActions";

const Smurfs = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      {state.smurfs.map(elem =>
        elem.map(elem => {
          return (
            <div key={elem.id}>
              <p>
                <strong>Name:</strong>
                {elem.name}
              </p>
              <p>
                <strong>Age:</strong>
                {elem.age}
              </p>
              <p>
                <strong>Height:</strong>
                {elem.height}
              </p>
              <button
                onClick={e => {
                  e.preventDefault();
                  props.setState({
                    name: elem.name,
                    age: elem.age,
                    height: elem.height
                  });
                }}
              >
                Edit
              </button>
              <button
                onClick={e => {
                  dispatch(editSmurf(props.state, elem.id));
                  props.setState({
                    ...props.state,
                    name: "",
                    age: "",
                    height: ""
                  });
                }}
              >
                Update Smurf
              </button>
              <button
                onClick={() => {
                  dispatch(deleteSmurfs(elem.id));
                  props.setState({
                    ...props.state,
                    name: "",
                    age: "",
                    height: ""
                  });
                  console.log(props.state);
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Smurfs;
