import { DEACTIVATE_AGENT_REQUEST } from '../actions/types';

const initialState = {
    message: {},
    status: false
}

export default ( state = initialState, action ) => {
    switch(action.type) {
        case DEACTIVATE_AGENT_REQUEST:
            return {
                ...state,
                message: action.message,
                status: true
            }
            default: return state;
    }
}