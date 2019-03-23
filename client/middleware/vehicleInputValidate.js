import isEmpty from 'is-empty';


export default function validateInput(data){
    let errors = {};
    if(data.driversLicence == ''){
        errors.driversLicence = 'This field is required';
    }
    if (!data.driversLicence|| data.driversLicence.trim().length === 0) {
        errors.driversLicence = 'This field can not be blank';
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

    if(data.RegistrationYear == ''){
        errors.RegistrationYear = 'This field is required';
    }
    if (!data.RegistrationYear || data.RegistrationYear.trim().length === 0) {
        errors.RegistrationYear = 'This field can not be blank';
    }

    if(data.vehicleOwnerAdress == ''){
        errors.vehicleOwnerAdress = 'This field is required';
    }
    if (!data.vehicleOwnerAdress || data.vehicleOwnerAdress.trim().length === 0) {
        errors.vehicleOwnerAdress = 'This field can not be blank';
    }

    if(data.vehicleOwnerName == ''){
        errors.vehicleOwnerName = 'This field is required';
    }
    if (!data.vehicleOwnerName || data.vehicleOwnerName.trim().length === 0) {
        errors.vehicleOwnerName = 'This field can not be blank';
    }

    if(data.chasisNo == ''){
        errors.chasisNo = 'This field is required';
    }
    if (!data.chasisNo || data.chasisNo.trim().length === 0) {
        errors.chasisNo = 'This field can not be blank';
    }

    if(data.engineNumber == ''){
        errors.engineNumber = 'This field is required';
    }
    if (!data.engineNumber || data.engineNumber.trim().length === 0) {
        errors.engineNumber = 'This field can not be blank';
    }

    if(data.vehicleMake == ''){
        errors.vehicleMake = 'This field is required';
    }
    if (!data.vehicleMake || data.vehicleMake.trim().length === 0) {
        errors.vehicleMake = 'This field can not be blank';
    }

    if(data.vrtID == ''){
        errors.vrtID = 'This field is required';
    }
    if (!data.vrtID || data.vrtID.trim().length === 0) {
        errors.vrtID = 'This field can not be blank';
    }

    if(data.RoadWorthinessExpDate == ''){
        errors.RoadWorthinessExpDate = 'This field is required';
    }
    if (!data.RoadWorthinessExpDate || data.RoadWorthinessExpDate.trim().length === 0) {
        errors.RoadWorthinessExpDate = 'This field can not be blank';
    }

    if(data.InsuranceExpDate == ''){
        errors.InsuranceExpDate = 'This field is required';
    }
    if (!data.InsuranceExpDate || data.InsuranceExpDate.trim().length === 0) {
        errors.InsuranceExpDate = 'This field can not be blank';
    }

    if(data.locationOfTransaction == ''){
        errors.locationOfTransaction = 'This field is required';
    }
    if (!data.locationOfTransaction || data.locationOfTransaction.trim().length === 0) {
        errors.locationOfTransaction = 'This field can not be blank';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
}
