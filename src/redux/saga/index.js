/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../types';
import loginSaga from './loginSaga';
import eventsSaga from './eventsSaga';

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(types.EVENT_REQUEST, eventsSaga)]);
}
