import { ALL_BANK_LISTS } from '../../actions/types';

const allBanks = (state = [], action = {}) => {
    switch(action.type){
    case ALL_BANK_LISTS: 
        return action.banks;
    default: return state;
    }
};

export default allBanks;