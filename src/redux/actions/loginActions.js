/*
 * Reducer actions related with login
 */
import * as types from '../types';

export function requestLogin(username, password, navigation) {
    console.log("called")
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
    navigation
  };
}

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function onLoginResponse(response) {
  console.log("response action",response)
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}



