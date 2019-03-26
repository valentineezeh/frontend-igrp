import isEmpty from 'is-empty';
import { DELETE_VEHICLE } from '../actions/types';

const initialState = {
    deleteSuccess: false,
    DeleteVehicle: {}
};

const deleteVehicle = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_VEHICLE:
          return {
              ...state,
              deleteSuccess: !isEmpty(action.DeleteVehicle)
          };
          default: return state;
    }
}

export default deleteVehicle;