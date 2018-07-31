import {
  INCREMENT,
  DECREMENT,
  INPUT,
  DATA_PENDING,
  DATA_SUCCESS,
  DATA_FAILURE
} from './types';

const initialState = {
  count: 0
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    case DECREMENT:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};

const initialInputState = {
  input: ''
};

export const inputReducer = (state = initialInputState, action = {}) => {
  switch (action.type) {
    case INPUT:
      return Object.assign({}, state, { input: action.payload });
    default:
      return state;
  }
};

const initialDataState = {
  isPending: false,
  data: '',
  error: ''
};

export const dataReducer = (state = initialDataState, action = {}) => {
  switch (action.type) {
    case DATA_PENDING:
      return Object.assign({}, state, { isPending: true });
    case DATA_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        data: action.payload
      });
    case DATA_FAILURE:
      return Object.assign({}, state, {
        isPending: false,
        error: action.payload
      });
    default:
      return state;
  }
};
