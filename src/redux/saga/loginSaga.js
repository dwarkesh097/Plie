import {put, call} from 'redux-saga/effects';

import {Alert} from 'react-native';
import loginUser from '../../api/methods/loginUser';
import * as loginActions from '../actions/loginActions';

export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());

  const response = yield call(loginUser, action.username, action.password);

  // console.log('response---', response.data.token);

  if (response.data.token) {
    yield put(loginActions.onLoginResponse(response));
    yield put(loginActions.disableLoader({}));
    // only redirect when response is success
    action.navigation.reset({
      routes: [{name: 'BottomTab'}],
    });
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader({}));
    action.navigation.reset({
      routes: [{name: 'BottomTab'}],
    });
    setTimeout(() => {
      Alert.alert('Login failed', response.error);
    }, 200);
  }
}
