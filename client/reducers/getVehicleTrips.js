import { GET_VEHICLE_TRIPS } from '../actions/types';

const initialState = {
    trips: []
}

const allVehicleTrips = (state = initialState, action = {}) => {
    switch(action.type){
        case GET_VEHICLE_TRIPS:
          return {
              ...state,
              trips: action.vehicleTrips
          }
        default: return state;
    }
}

export default allVehicleTrips;