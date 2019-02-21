import isEmpty from 'is-empty';


export default function validateInput(data){
    let errors = {};
    if(data.phoneNumber == ''){
        errors.phoneNumber = 'This field is required';
    }
    if(data.password == ''){
        errors.password = 'Password field is required';
    }
    if (!data.phoneNumber || data.phoneNumber.trim().length === 0) {
        errors.email = 'This field can not be blank';
    }
    if(!data.password){
        errors.password = 'Password Field should not be blank';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };
}
