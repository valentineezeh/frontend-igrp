import { ALL_AGENTS_REQUEST } from '../actions/types';

export default function allAgents (state = [], action = {}) {
    switch(action.type){
    case ALL_AGENTS_REQUEST: return action.agents;
    default: return state;
    }
}
