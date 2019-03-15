import { DEACTIVATE_AGENT_REQUEST } from '../actions/types';

const initialState = {
    message: {}
}

export default ( state = initialState, action ) => {
    switch(action.type) {
        case DEACTIVATE_AGENT_REQUEST:
            return {
                ...state,
                message: action.message
            }
            default: return state;
    }
}