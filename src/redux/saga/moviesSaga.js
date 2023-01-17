import { put, call } from 'redux-saga/effects';

import { Alert } from 'react-native';
import movieList from '../../api/methods/getMovieList';
import * as movieListAction from '../actions/movieListActions';

export default function* moviesAsync(action) {
    yield put(movieListAction.enableLoader());
    const response  = yield call(movieList, action.token);
    console.log("action--",action.token);

    // const response = yield call(movieList);
    console.log("---response--",response);

    if (response) {
        yield put(movieListAction.getMoviesResponse(response));
        yield put(movieListAction.disableLoader({}));
    } else {
        yield put(movieListAction.getMoviesFailed());
        yield put(movieListAction.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Something went wrong', response.error);
        }, 200);
    }
}