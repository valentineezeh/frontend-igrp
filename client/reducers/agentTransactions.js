import { AGENT_TRANSACTIONS_REQUEST } from '../actions/types';

const initialState = {
    allAgentTransactions: []
};

export default (state = initialState, action={}) => {
    switch(action.type){
        case AGENT_TRANSACTIONS_REQUEST:
            return {
                ...state,
                allAgentTransactions: action.agentTransact
            }
        default: return state;
    }
}