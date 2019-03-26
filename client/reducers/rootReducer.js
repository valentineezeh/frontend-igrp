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
import allVehicleTrips from './getVehicleTrips';
import confirmBvn from './confirmBvn';
import confirmNinRequest from './confirmNin';
import activateWallet from './walletReducers/activateWallet';
import resetWalletPasscode from './walletReducers/resetWalletCode';
import walletBalance from './walletReducers/getWalletBalance';
import recoverWalletCode from './walletReducers/recoverWalletCode';
import sendMoneyToWallet from './walletTransactionsReducers/sendMoney';
import transactionHistory from './walletTransactionsReducers/transactionHistory';
import allBanks from './walletTransactionsReducers/getAllBanks';
import bankFundTransfer from './walletTransactionsReducers/transferFundFromWalletToBank';
import creditWallet from './walletTransactionsReducers/creditWallet';
import deleteVehicle from './deleteVehicle';

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
    updateVehicle,
    allVehicleTrips,
    confirmBvn,
    confirmNinRequest,
    activateWallet,
    resetWalletPasscode,
    walletBalance,
    recoverWalletCode,
    sendMoneyToWallet,
    transactionHistory,
    allBanks,
    bankFundTransfer,
    creditWallet,
    deleteVehicle
});