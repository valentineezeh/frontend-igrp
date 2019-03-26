import isEmpty from 'is-empty';


const creditWalletInput = (data) => {
    let errors = {};
    if(data.amount == '' || !data.amount || data.amount.trim().length === 0){
        errors.amount = 'This field is required';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };
}

export default creditWalletInput;