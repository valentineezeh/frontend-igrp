import isEmpty from 'is-empty';


export default function updateVehicleInput(data){
    let errors = {};
    if(data.plateNumber == ''){
        errors.plateNumber = 'This field is required';
    }
    if (!data.plateNumber) {
        errors.plateNumber = 'This field can not be blank';
    }
    if(data.vehicleNumber == ''){
        errors.vehicleNumber = 'This field is required';
    }
    if(data.vehicleNumber == ''){
        errors.vehicleNumber = 'Password field is required';
    }
    if (!data.phoneNumber) {
        errors.phoneNumber = 'This field can not be blank';
    }
    if (data.phoneNumber == '') {
        errors.phoneNumber = 'This field can not be blank';
    }
    if(!data.vehicleType){
        errors.vehicleType = 'Password Field should not be blank';
    }
    if (data.vehicleType == '') {
        errors.vehicleType = 'This field can not be blank';
    }

    if(data.driversLicence == ''){
        errors.driversLicence = 'This field is required';
    }
    if (!data.driversLicence) {
        errors.driversLicence = 'This field can not be blank';
    }

    if(data.vehicleOwnerAdress == ''){
        errors.vehicleOwnerAdress = 'This field is required';
    }
    if (!data.vehicleOwnerAdress) {
        errors.vehicleOwnerAdress = 'This field can not be blank';
    }

    if(data.vehicleOwnerName == ''){
        errors.vehicleOwnerName = 'This field is required';
    }
    if (!data.vehicleOwnerName) {
        errors.vehicleOwnerName = 'This field can not be blank';
    }

    if(data.chasisNo == ''){
        errors.chasisNo = 'This field is required';
    }
    if (!data.chasisNo) {
        errors.chasisNo = 'This field can not be blank';
    }

    if(data.engineNumber == ''){
        errors.engineNumber = 'This field is required';
    }
    if (!data.engineNumber) {
        errors.engineNumber = 'This field can not be blank';
    }

    if(data.vehicleMake == ''){
        errors.vehicleMake = 'This field is required';
    }
    if (!data.vehicleMake) {
        errors.vehicleMake = 'This field can not be blank';
    }

    if(data.vrtID == ''){
        errors.vrtID = 'This field is required';
    }
    if (!data.vrtID) {
        errors.vrtID = 'This field can not be blank';
    }

    if(data.RoadWorthinessExpDate == ''){
        errors.RoadWorthinessExpDate = 'This field is required';
    }
    if (!data.RoadWorthinessExpDate) {
        errors.RoadWorthinessExpDate = 'This field can not be blank';
    }

    if(data.InsuranceExpDate == ''){
        errors.InsuranceExpDate = 'This field is required';
    }
    if (!data.InsuranceExpDate) {
        errors.InsuranceExpDate = 'This field can not be blank';
    }

    if(data.locationOfTransaction == ''){
        errors.locationOfTransaction = 'This field is required';
    }
    if (!data.locationOfTransaction) {
        errors.locationOfTransaction = 'This field can not be blank';
    }

    if(data.RegistrationYear == ''){
        errors.RegistrationYear = 'This field is required';
    }
    if (!data.RegistrationYear) {
        errors.RegistrationYear = 'This field can not be blank';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
}
