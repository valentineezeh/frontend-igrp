import isEmpty from 'is-empty';
import {
    SEND_MONEY_TO_WALLET,
    SET_SEND_MONEY_ERROR_MESSAGE,
    DELETE_SEND_MONEY_ERROR_MESSAGE
} from '../../actions/types';

const initialState = {
  sendMoney: {},
  status: false,
  error: ''
};

const sendMoneyToWallet = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MONEY_TO_WALLET:
      return {
        ...state,
        status: !isEmpty(action.sendMoney),
        sendMoney: action.sendMoney
      };
    case SET_SEND_MONEY_ERROR_MESSAGE:
      return {
        ...state,
        status: false,
        error: action.error
      };
    case DELETE_SEND_MONEY_ERROR_MESSAGE:
      return {
        error: {}
      };
    default: return state;
  }
};

export default sendMoneyToWallet;
