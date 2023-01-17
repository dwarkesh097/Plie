import * as types from '../types';


//events
export function requestEvents(token) {
  return {
    type: types.EVENT_REQUEST,
    token
  };
}


export function getEventsFailed() {
  return {
    type: types.EVENT_FAILED,
  };
}

export function getEventsResponse(response) {
  return {
    type: types.EVENT_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.EVENT_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.EVENT_DISABLE_LOADER,
  };
}