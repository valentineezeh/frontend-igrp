import isEmpty from 'is-empty';
import {
  RESET_PASSCODE,
  SET_RESET_PASSCODE_MESSAGE,
  DELETE_RESET_PASSCODE_ERROR_MESSAGE
} from '../../actions/types';

const initialState = {
  resetPasscode: {},
  status: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSCODE:
      return {
        ...state,
        status: !isEmpty(action.resetPasscode),
        resetPasscode: action.resetPasscode
      };
    case SET_RESET_PASSCODE_MESSAGE:
      return {
        ...state,
        status: false,
        error: action.error
      };
    case DELETE_RESET_PASSCODE_ERROR_MESSAGE:
      return {
        error: {}
      };
    default: return state;
  }
};
