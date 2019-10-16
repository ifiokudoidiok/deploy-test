import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import "./index.css";
import App from "./App";
import * as reducers from "./states/reducers";
import * as serviceWorker from "./serviceWorker";

const monsterReducer = combineReducers({
  count: reducers.countReducer,
  api: reducers.nasaAPI,
});

const store = createStore(
  monsterReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
