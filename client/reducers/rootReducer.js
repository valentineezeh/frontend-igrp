import { combineReducers } from 'redux';
import auth from './auth';
import allAgents from './agents';
import allVehicles from './vehicles';
import allTransactions from './transactions';
import postAgent from './postAgent';
import postVehicleReducer from './createVehicle';
import singleAgentRequests from './singleAgent';
import agentActivateRequest from './activateAgent';
import agentDeactivateRequest from './deactivateAgent';
import singleAgentAllTransaction from './agentTransactions';
import deleteAgent from './deleteAgent';
import singleVehicleRequest from './getSingleVehicle';
import updateAgent from './updateAgent';
import updateVehicle from './updateVehicle';

export default combineReducers({
    auth,
    allAgents,
    allVehicles,
    allTransactions,
    postAgent,
    postVehicleReducer,
    singleAgentRequests,
    agentActivateRequest,
    agentDeactivateRequest,
    singleAgentAllTransaction,
    deleteAgent,
    singleVehicleRequest,
    updateAgent,
    updateVehicle
});