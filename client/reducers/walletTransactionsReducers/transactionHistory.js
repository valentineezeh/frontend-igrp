import { GET_TRANSACTION_HISTORY } from '../../actions/types';

const transactionHistory = (state = [], action = {}) => {
    switch(action.type){
    case GET_TRANSACTION_HISTORY: 
        return action.transactionHistory;
    default: return state;
    }
};

export default transactionHistory;