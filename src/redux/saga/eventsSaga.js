import { put, call } from 'redux-saga/effects';

import { Alert } from 'react-native';
import eventList from '../../api/methods/getEventList';
import * as eventListAction from '../actions/eventListActions';

export default function* eventsAsync(action) {
    yield put(eventListAction.enableLoader());
    const response  = yield call(eventList, action.token);
    if (response) {
        yield put(eventListAction.getEventsResponse(response));
        yield put(eventListAction.disableLoader({}));
    } else {
        yield put(eventListAction.getEventsFailed());
        yield put(eventListAction.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Something went wrong', response.error);
        }, 200);
    }
}