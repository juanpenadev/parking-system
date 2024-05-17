import { combineReducers } from 'redux';
import vehiclesReducer from './vehiclesReducer';  // Assuming vehiclesReducer is defined
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  auth: loginReducer,
  vehicles: vehiclesReducer
});

export default rootReducer;