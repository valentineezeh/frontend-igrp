import { GET_WALLET_BALANCE } from '../../actions/types';

const walletBalance =  (state = [], action = {}) => {
    switch(action.type){
    case GET_WALLET_BALANCE: return action.walletBalance;
    default: return state;
    }
};

export default walletBalance;