import { combineReducers } from 'redux';
import auth from './auth';
import allAgents from './agents';
import allDrivers from './drivers';
import allTransactions from './transactions';
import postAgent from './postAgent';

export default combineReducers({
    auth,
    allAgents,
    allDrivers,
    allTransactions,
    postAgent
});