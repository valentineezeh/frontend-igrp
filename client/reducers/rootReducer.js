import { combineReducers } from 'redux';
import auth from './auth';
import allAgents from './agents';
import allDrivers from './drivers';
import allTransactions from './transactions';
import postAgent from './postAgent';
import postDriverReducer from './createDriver';
import singleAgentRequests from './singleAgent';
import agentActivateRequest from './activateAgent';
import agentDeactivateRequest from './deactivateAgent';
import singleAgentAllTransaction from './agentTransactions';
import deleteAgent from './deleteAgent';

export default combineReducers({
    auth,
    allAgents,
    allDrivers,
    allTransactions,
    postAgent,
    postDriverReducer,
    singleAgentRequests,
    agentActivateRequest,
    agentDeactivateRequest,
    singleAgentAllTransaction,
    deleteAgent
});