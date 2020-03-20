import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { smurfReducer } from "./reducers/smurfReducer";

export const store = createStore(
  smurfReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
