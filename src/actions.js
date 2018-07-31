import {
  INCREMENT,
  DECREMENT,
  INPUT,
  DATA_PENDING,
  DATA_SUCCESS,
  DATA_FAILURE
} from './types';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const input = text => {
  return {
    type: INPUT,
    payload: text
  };
};

export const getData = input => dispatch => {
  DATA_PENDING;
  fetch(`https://www.reddit.com/user/${input}.json`)
    .then(response => response.json())
    .then(data => dispatch({ type: DATA_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: DATA_FAILURE, payload: err }));
};
