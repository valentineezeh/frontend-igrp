import { GET_SINGLE_VEHICLE_REQUEST } from '../actions/types';

const initialState = {
    singleVehicle: [],
    status: false
};

const singleVehicleRequest = (state = initialState, action ={}) => {
    switch(action.type){
        case GET_SINGLE_VEHICLE_REQUEST:
          return {
              ...state,
              singleVehicle: action.singleVehicleRequests,
              status: true
          }
          default:
            return state;
    }
}

export default singleVehicleRequest;