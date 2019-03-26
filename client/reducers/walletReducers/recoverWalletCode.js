import isEmpty from 'is-empty';
import {
    RECOVER_WALLET_CODE, SET_RECOVER_WALLET_CODE_ERROR, DELETE_RECOVER_WALLET_CODE_MESSAGE
} from '../../actions/types';

const initialState = {
  recoverPasscode: {},
  status: false,
  error: ''
};

const recoverWalletCode = (state = initialState, action) => {
  switch (action.type) {
    case RECOVER_WALLET_CODE:
      return {
        ...state,
        status: !isEmpty(action.recoverCode),
        recoverPasscode: action.recoverCode
      };
    case SET_RECOVER_WALLET_CODE_ERROR:
      return {
        ...state,
        status: false,
        error: action.recoverCodeError
      };
    case DELETE_RECOVER_WALLET_CODE_MESSAGE:
      return {
        error: {}
      };
    default: return state;
  }
};

export default recoverWalletCode;
