import { ALL_TRANSACTIONS_REQUEST } from '../actions/types';

export default function allTransaction (state = [], action = {}){
    switch(action.type){
    case ALL_TRANSACTIONS_REQUEST: return action.transactions;
    default: return state;
    }
}