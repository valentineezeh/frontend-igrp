import isEmpty from 'is-empty';


export default function validateInput(data){
    let errors = {};
    if(data.driversLicense == ''){
        errors.driversLicense = 'This field is required';
    }
    if (!data.driversLicense || data.driversLicense.trim().length === 0) {
        errors.driversLicense = 'This field can not be blank';
    }
    if(data.phoneNumber == ''){
        errors.phoneNumber = 'This field is required';
    }
    if(data.vehicleType == ''){
        errors.vehicleType = 'This field is required';
    }
    if (!data.phoneNumber || data.phoneNumber.trim().length === 0) {
        errors.phoneNumber = 'This field can not be blank';
    }
    if(!data.vehicleType || data.vehicleType.trim().length === 0){
        errors.vehicleType = 'This field can not be blank';
    }

    if(data.fullname == ''){
        errors.fullname = 'This field is required';
    }
    if (!data.fullname || data.fullname.trim().length === 0) {
        errors.fullname = 'This field can not be blank';
    }

    if(data.vehicleNumber == ''){
        errors.vehicleNumber = 'This field is required';
    }
    if (!data.vehicleNumber || data.vehicleNumber.trim().length === 0) {
        errors.vehicleNumber = 'This field can not be blank';
    }

    if(data.plateNumber == ''){
        errors.plateNumber = 'This field is required';
    }
    if (!data.plateNumber || data.plateNumber.trim().length === 0) {
        errors.plateNumber = 'This field can not be blank';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
}
