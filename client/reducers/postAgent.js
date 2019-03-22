import {
    POST_AGENT,
    SET_CREATE_AGENT_ERROR,
    DELETE_AGENT_ERROR_MESSAGE
} from '../actions/types';

const initialState = {
    status: false,
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_AGENT:
        return {
            ...state,
            status: true
        }
        case SET_CREATE_AGENT_ERROR:
        return {
          ...state,
          status: false,
          error: action.error
        };
        case DELETE_AGENT_ERROR_MESSAGE:
        return {
          error: {}
        };
        default: return state;
    }
}



