import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import { CREATE_DRIVER } from './types';
import routes from '../constants/routes';

export const postNewDriver = newDriver => ({
    type: CREATE_DRIVER,
    newDriver
});

const createDriver = driverDetails => (dispatch) => {
    const driver = driverDetails;
    return axios.post(`${config.apiUrl}${routes.CREATEDRIVERS}`, driver).then(response => {
        const { message } = response.data;
        const {statusCode} = response.data;
        dispatch(postNewDriver(statusCode));
        toastr.success(message);
    }).catch ( error => {
        const {message} = error.response.data;
        toastr.error(message);
    }); 
};

export default createDriver;