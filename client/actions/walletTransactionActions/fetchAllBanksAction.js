import axios from 'axios';
import config from '../../config/index';
import { ALL_BANK_LISTS } from '../types';
import routes from '../../constants/routes';

const allBanksList = (banks) => {
    return {
        type: ALL_BANK_LISTS,
        banks
    };
};

const fetchBanksRequest = () => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.GETALLBANKS}`).then(response => {
            dispatch(allBanksList(response.data.data));
        }).catch(error => {
            throw(error);
        });
    };
};

export default fetchBanksRequest;