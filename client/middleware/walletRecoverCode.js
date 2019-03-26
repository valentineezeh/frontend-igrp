import isEmpty from 'is-empty';


export default function walletRecoveryCodeInput(data){
    let errors = {};
    if(data.newCode == '' || !data.newCode || data.newCode.trim().length === 0){
        errors.newCode = 'This field is required';
    }
    if(data.confirmNewCode == '' || !data.confirmNewCode || data.confirmNewCode.trim().length === 0){
        errors.confirmNewCode = 'This field is required';
    }
    if (data.securityAnswer == '' || !data.securityAnswer || data.securityAnswer.trim().length === 0) {
        errors.securityAnswer = 'This field can not be blank';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };
}
