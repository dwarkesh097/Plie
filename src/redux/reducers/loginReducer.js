/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../types';

const initialState = {
  token: "",
  username: '',
  password: '',
  user :{},
  email : "",
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      token: action.response.data.token,
      user :action.response.data.user,

    };
  },
  [types.LOGIN_FAILED](state) {
    return {
      ...state,
    };
  },
});
