// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import message from './message';

const rootReducer = combineReducers({
  message,
  routing
});

export default rootReducer;
