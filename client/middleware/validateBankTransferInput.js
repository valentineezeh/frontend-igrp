import isEmpty from 'is-empty';


const bankTransferInput = (data) => {
    let errors = {};
    if(data.accountNo == '' || !data.accountNo || data.accountNo.trim().length === 0){
        errors.accountNo = 'This field is required';
    }
    if(data.amount == '' || !data.amount || data.amount.trim().length === 0){
        errors.amount = 'This field is required';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };
}

export default bankTransferInput;