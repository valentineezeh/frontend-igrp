import { ACTIVATE_AGENT_REQUEST } from '../actions/types'

const initialState = {
    status: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_AGENT_REQUEST:
            return {
                ...state,
                status: true
            }
        default: return state;
    }
}