import isEmpty from 'is-empty';
import validator from 'validator';


export default function updateAgentInput(data){
    let errors = {};
    if(!validator.isEmail(data.email)){
        errors.email = 'Invalid Email';
    }
    if(data.email == ''){
        errors.email = 'This field is required';
    }
    if (!data.email) {
        errors.email = 'This field can not be blank';
    }
    if(data.phoneNumber == ''){
        errors.phoneNumber = 'This field is required';
    }
    if(data.password == ''){
        errors.password = 'Password field is required';
    }
    if (!data.phoneNumber) {
        errors.phoneNumber = 'This field can not be blank';
    }

    if(data.fullname == ''){
        errors.fullname = 'This field is required';
    }
    if (!data.fullname) {
        errors.fullname = 'This field can not be blank';
    }

    if(data.address == ''){
        errors.address = 'This field is required';
    }
    if (!data.address) {
        errors.address = 'This field can not be blank';
    }

    if(data.age == ''){
        errors.age = 'This field is required';
    }
    if (!data.age) {
        errors.age = 'This field can not be blank';
    }

    if(data.bvn == ''){
        errors.bvn = 'This field is required';
    }
    if (!data.bvn) {
        errors.bvn = 'This field can not be blank';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
}
