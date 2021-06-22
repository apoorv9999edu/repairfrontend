import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index.js";
import logger from "redux-logger";

// const mylogger = (store)=>(next)=>(action)=>{
//   console.log("logged====>",action);
//   next(action);
// };
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
