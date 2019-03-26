import { POST_CONFIRM_BVN, SET_CONFIRM_BVN_ERROR, DELETE_CONFIRM_BVN_ERROR } from '../actions/types';
import isEmpty from 'is-empty';

const initialState = {
    status: false,
    confirmBvn: {},
    error: ''
};

const confirmBvn = (state = initialState, action) => {
  switch (action.type) {
      case POST_CONFIRM_BVN:
        return {
            ...state,
            status: !isEmpty(action.ConfirmBvn),
            confirmBvn: action.ConfirmBvn
        };
      case SET_CONFIRM_BVN_ERROR:
        return {
          ...state,
          status: false,
          error: action.error
        };
    case DELETE_CONFIRM_BVN_ERROR:
        return {
          error: {}
        };
      default: return state;
    }
  }

  export default confirmBvn;