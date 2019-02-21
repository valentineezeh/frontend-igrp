import { ALL_DRIVERS_REQUEST } from '../actions/types';

export default function allDrivers (state = [], action = {}) {
    switch(action.type){
    case ALL_DRIVERS_REQUEST: return action.drivers;
    default: return state;
    }
}