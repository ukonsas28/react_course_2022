import { combineReducers } from 'redux';
import userInfoReducer from './auth/reducer';

const rootReducer = combineReducers({
  auth: userInfoReducer,
});

export default rootReducer;
