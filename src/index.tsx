import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer, composeWithDevTools(
    applyMiddleware()
  ))}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

