// src/redux/reducers/vehiclesReducer.js
const initialState = {
  vehicles: []  // Ensure this is an array
};

function vehiclesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_VEHICLE':
      return { ...state, vehicles: [...state.vehicles, action.payload] };
    case 'UPDATE_VEHICLE':
      return {
        ...state,
        vehicles: state.vehicles.map(vehicle => 
          vehicle.id === action.payload.id ? action.payload : vehicle
        )
      };
    case 'DELETE_VEHICLE':
      return {
        ...state,
        vehicles: state.vehicles.filter(vehicle => vehicle.id !== action.payload)
      };
    default:
      return state;
  }
}

export default vehiclesReducer;
