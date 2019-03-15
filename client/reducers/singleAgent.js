import { SINGLE_AGENT, SINGLE_AGENT_SUCCESS_MESSAGE } from '../actions/types';

const initialState = {
    singleAgent: [],
    agentSuccessMessage: {},
    status: false
};

export default function singleAgentRequests(state = initialState, action={}){
    switch(action.type){
    case SINGLE_AGENT:
        return {
            ...state,
            singleAgent: action.singleAgentRequest
        }
    case SINGLE_AGENT_SUCCESS_MESSAGE:
        return {
            ...state,
            status: true
        }
    default:
        return state;
    }
}