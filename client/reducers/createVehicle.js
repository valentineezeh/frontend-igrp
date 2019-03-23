import { CREATE_VEHICLE , SET_CREATE_VEHICLE_ERROR, DELETE_VEHICLE_ERROR_MESSAGE } from '../actions/types';

const initialState = {
    status: false,
    statusCode: {},
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_VEHICLE:
        return {
            ...state,
            status: true
        }
        case SET_CREATE_VEHICLE_ERROR:
        return {
          ...state,
          status: false,
          error: action.error
        };
        case DELETE_VEHICLE_ERROR_MESSAGE:
        return {
          error: ''
        };
        default: return state;
    }
}
