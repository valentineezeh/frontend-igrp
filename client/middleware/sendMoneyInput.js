import isEmpty from 'is-empty';


export default function sendMoneyInput(data){
    let errors = {};
    if(data.receiverNumber == '' || !data.receiverNumber || data.receiverNumber.trim().length === 0){
        errors.receiverNumber = 'This field is required';
    }
    if(data.amount == '' || !data.amount || data.amount.trim().length === 0){
        errors.amount = 'This field is required';
    }
    if (data.passCode == '' || !data.passCode || data.passCode.trim().length === 0) {
        errors.passCode = 'This field can not be blank';
    }
    if (data.description == '' || !data.description || data.description.trim().length === 0) {
        errors.description = 'This field can not be blank';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };
}
