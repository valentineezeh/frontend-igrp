import { ALL_AGENTS_REQUEST, AGENT_SUCCESS_MESSAGE  } from '../actions/types';

const initialState = {
    agents: [],
    SuccessMessage: {}
};

export default function allAgents (state = initialState, action = {}) {
    switch(action.type){
    case ALL_AGENTS_REQUEST: 
        return {
            ...state,
            agents: action.agents
        }
    case AGENT_SUCCESS_MESSAGE: 
        return {
            ...state,
            SuccessMessage: action.SuccessMessage
        };
    default: return state;
    }
}
