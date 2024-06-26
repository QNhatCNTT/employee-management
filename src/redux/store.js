import { applyMiddleware, compose, createStore } from "redux";
import { reducers } from "./reducers";
// logger,
import { thunk } from "redux-thunk";
import monitorReducerEnhancer from "./utils/monitorReducerEnancer";
const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducers, composedEnhancers(middlewareEnhancer, monitorReducerEnhancer));
