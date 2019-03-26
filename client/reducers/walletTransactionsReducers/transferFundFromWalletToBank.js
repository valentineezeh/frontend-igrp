import isEmpty from 'is-empty';
import {
  BANK_FUND_TRANSFER,
  SET_BANK_TRANSFER_ERROR_MESSAGE,
  DELETE_BANK_TRANSFER_ERROR_MESSAGE
} from '../../actions/types';

const initialState = {
  status: false,
  bankFundTransfer: {}
};

const bankFundTransfer = (state = initialState, action) => {
  switch (action.type) {
    case BANK_FUND_TRANSFER:
      return {
        ...state,
        status: !isEmpty(action.bankTransfer),
        bankFundTransfer: action.bankTransfer
      };
    case SET_BANK_TRANSFER_ERROR_MESSAGE:
      return {
        ...state,
        status: false,
        error: action.error
      };
    case DELETE_BANK_TRANSFER_ERROR_MESSAGE:
      return {
        error: {}
      };
    default: return state;
  }
};

export default bankFundTransfer;
