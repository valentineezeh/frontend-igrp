import isEmpty from 'is-empty';
import { DELETE_AGENT_REQUEST } from '../actions/types';

const initialState = {
    deleteSuccess: false,
    DeleteAgent: {}
};

const deleteAgent = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_AGENT_REQUEST:
          return {
              ...state,
              deleteSuccess: !isEmpty(action.DeleteAgent)
          };
          default: return state;
    }
}

export default deleteAgent;
