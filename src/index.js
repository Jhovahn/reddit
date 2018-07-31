import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import { reducer, inputReducer, dataReducer } from './reducers';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

let reducers = combineReducers({ reducer, inputReducer, dataReducer });

let store = createStore(reducers, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
