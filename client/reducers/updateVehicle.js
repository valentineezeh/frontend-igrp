import isEmpty from 'is-empty';
import { UPDATE_VEHICLE, SET_UPDATE_VEHICLE_ERROR,DELETE_UPDATE_VEHICLE_ERROR_MESSAGE } from '../actions/types';

const initialState = {
  success: false,
  updateVehicle: {},
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VEHICLE:
      return {
        ...state,
        success: !isEmpty(action.vehicleUpdate),
        vehicleUpdate: action.vehicleUpdate
      };
      case SET_UPDATE_VEHICLE_ERROR:
        return {
          ...state,
          success: false,
          error: action.error
        };
      case DELETE_UPDATE_VEHICLE_ERROR_MESSAGE:
        return {
          error: {}
        };
    default: return state;
  }
};
