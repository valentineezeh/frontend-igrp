import isEmpty from 'is-empty';
import {
    CREDIT_WALLET,
    SET_CREDIT_WALLET_ERROR_MESSAGE,
    DELETE_CREDIT_WALLET_ERROR_MESSAGE
} from '../../actions/types';

const initialState = {
    creditWallet: {},
    status: false,
    error: ''
  };

const creditWallet = (state = initialState, action) => {
    switch (action.type) {
      case CREDIT_WALLET:
        return {
          ...state,
          status: !isEmpty(action.creditWallet),
          creditWallet: action.creditWallet
        };
      case SET_CREDIT_WALLET_ERROR_MESSAGE:
        return {
          ...state,
          status: false,
          error: action.error
        };
      case DELETE_CREDIT_WALLET_ERROR_MESSAGE:
        return {
          error: {}
        };
      default: return state;
    }
  };

  export default creditWallet;
  