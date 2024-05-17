export const loginUser = (user) => ({
    type: 'LOGIN_USER',
    payload: user
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT_USER'
  });
  
  
import * as types from './actionTypes';


// Vehicle Actions
export const addVehicle = vehicle => ({ type: types.ADD_VEHICLE, payload: vehicle });
export const updateVehicle = vehicle => ({ type: types.UPDATE_VEHICLE, payload: vehicle });
export const deleteVehicle = vehicleId => ({ type: types.DELETE_VEHICLE, payload: vehicleId });
export const fetchVehicles = () => ({ type: types.FETCH_VEHICLES });
