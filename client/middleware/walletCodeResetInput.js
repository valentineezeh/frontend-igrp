import isEmpty from 'is-empty';


export default function walletCodeResetInput(data){
    let errors = {};
    if(data.previousCode == '' || !data.previousCode || data.previousCode.trim().length === 0){
        errors.previousCode = 'This field is required';
    }
    if(data.newCode == '' || !data.newCode || data.newCode.trim().length === 0){
        errors.newCode = 'This field is required';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };
}
