import createReducer from '../lib/createReducer';
import * as types from '../types';

const initialState = {
  responseData: [],
};

export const eventListReducer = createReducer(initialState, {
  [types.EVENT_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.EVENT_RESPONSE](state, action) {
    return {
      ...state,
      responseData: action.response.data,
    };
  },
  [types.EVENT_FAILED](state) {
    return {
      ...state,
    };
  },
});
