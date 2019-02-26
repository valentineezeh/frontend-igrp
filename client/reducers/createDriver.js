import { CREATE_DRIVER } from '../actions/types';

const initialState = {
    status: false,
    statusCode: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DRIVER:
        return {
            ...state,
            status: true
        }
        default: return state;
    }
}
