import { POST_CONFIRM_NIN, SET_CONFIRM_NIN_ERROR, DELETE_CONFIRM_NIN_ERROR } from '../actions/types';
import isEmpty from 'is-empty';

const initialState = {
    status: false,
    confirmNin: {},
    error: ''
};

const confirmNinRequest = (state = initialState, action) => {
  switch (action.type) {
      case POST_CONFIRM_NIN:
        return {
            ...state,
            status: !isEmpty(action.ConfirmNin),
            confirmNin: action.ConfirmNin
        };
      case SET_CONFIRM_NIN_ERROR:
        return {
          ...state,
          status: false,
          error: action.error
        };
    case DELETE_CONFIRM_NIN_ERROR:
        return {
          error: {}
        };
      default: return state;
    }
  }

  export default confirmNinRequest;