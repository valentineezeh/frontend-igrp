import isEmpty from 'is-empty';


export default function activateWalletInput(data){
    let errors = {};
    if(data.passCode == '' || !data.passCode || data.passCode.trim().length === 0){
        errors.passCode = 'This field is required';
    }
    if(data.securityQuestion == '' || !data.securityQuestion || data.securityQuestion.trim().length === 0){
        errors.securityQuestion = 'This field is required';
    }
    if (data.securityAnswer == '' || !data.securityAnswer || data.securityAnswer.trim().length === 0) {
        errors.securityAnswer = 'This field can not be blank';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };
}
