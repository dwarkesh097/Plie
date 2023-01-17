/*
 * combines all th existing reducers
 */
// import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as eventListReducer from './eventListReducer';

export default Object.assign(loginReducer,eventListReducer);
 