import isEmpty from 'is-empty';
import { ACTIVATE_WALLET,
  SET_ACTIVATION_WALLET_ERROR, DELETE_ACTIVATE_WALLET_ERROR_MESSAGE } from '../../actions/types';

const initialState = {
  activateWallet: {},
  status: false,
  error: ''
};

const activateWallet = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_WALLET:
      return {
        ...state,
        status: !isEmpty(action.activateWallet),
        activateWallet: action.activateWallet
      };
    case SET_ACTIVATION_WALLET_ERROR:
      return {
        ...state,
        status: false,
        error: action.activateError
      };
    case DELETE_ACTIVATE_WALLET_ERROR_MESSAGE:
      return {
        error: {}
      };
    default: return state;
  }
};

export default activateWallet;
