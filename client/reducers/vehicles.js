import { ALL_VEHICLES_REQUEST } from '../actions/types';

export default function allVehicles (state = [], action = {}) {
    switch(action.type){
    case ALL_VEHICLES_REQUEST: return action.vehicles;
    default: return state;
    }
}