import isEmpty from 'is-empty';
import { UPDATE_AGENT, SET_UPDATE_AGENT_ERROR, DELETE_UPDATE_AGENT_ERROR_MESSAGE  } from '../actions/types';

const initialState = {
  success: false,
  updateAgent: {},
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AGENT:
      return {
        ...state,
        success: !isEmpty(action.agentUpdate),
        updateAgent: action.agentUpdate
      };
      case SET_UPDATE_AGENT_ERROR:
        return {
          ...state,
          success: false,
          error: action.error
        };
      case DELETE_UPDATE_AGENT_ERROR_MESSAGE:
        return {
          error: {}
        };
    default: return state;
  }
};
