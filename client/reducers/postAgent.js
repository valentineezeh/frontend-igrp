import { POST_AGENT } from '../actions/types';

const initialState = {
    status: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_AGENT:
        return {
            ...state,
            status: true
        }
        default: return state;
    }
}



