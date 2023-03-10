import * as types from '../types';


// movies
export function requestMovies(token) {
  return {
    type: types.MOVIES_REQUEST,
    token
  };
}


export function getMoviesFailed() {
  return {
    type: types.MOVIES_FAILED,
  };
}

export function getMoviesResponse(response) {
  return {
    type: types.MOVIES_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.MOVIES_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.MOVIES_DISABLE_LOADER,
  };
}