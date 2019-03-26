import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import TextField from '../../commons/TextField.jsx'
import creditWalletInput from '../../../middleware/creditWalletInputValidation';
import creditWallet, { deleteCreditWalletErrorMessage } from '../../../actions/walletTransactionActions/creditWalletAction';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';

/**
 * @class CreditWalletForm
 */
class InstaPayCreditWalletForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: '',
            customer: {
              email: '',
              firstname: '',
              lastName: '',
              phone: ''
            },
            errors: {},
            isLoading: false,
          };
          this.onSubmit = this.onSubmit.bind(this);
          this.onChange = this.onChange.bind(this);
          this.handleDelete = this.handleDelete.bind(this);
    }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onChange (event){
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const newErrors = Object.assign({}, errors);
      delete errors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors: newErrors
      });
    } 
    else {
      const path = event.target.name.split('.');
      const depth = path.length;
        const state = {
          ...this.state,
          callbackUrl: 'https://igrtransport.herokuapp.com/'

        };
        let ref = state;
        for (let i = 0; i < depth; i += 1) {
          if (i === depth - 1) {
            ref[path[i]] = event.target.value;
          } else {
            ref = ref[path[i]];
          }
        }
        this.setState(state);
    }
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onSubmit (event) {
    event.preventDefault();
    // eslint-disable-next-line no-shadow
    const { creditWallet } = this.props;
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      creditWallet(this.state);
    }
  }

  handleDelete(){
    const { deleteCreditWalletErrorMessage } = this.props;
    deleteCreditWalletErrorMessage();
    this.setState({ isLoading: false });
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
 isValid (){
   const { errors, isValid } = creditWalletInput(
     this.state
   );
   if (!isValid) {
     this.setState({ errors });
   }

   return isValid;
 }

 /**
   *
   * @returns {*} - render
   */
 render() {
   const {
     errors,
     amount,
     customer,
     isLoading
   } = this.state;
   const { status, url, error } = this.props;
   let redirectLink = url === undefined ? '' : url.authorizationUrl;

   if (status) {
     window.location.href = `${redirectLink}`;
   }
   const creditWalletForm = (
     <div>
         <div className="col-md-9" id="transaction">
         <div className="panel panel-default">
         <div className="panel-heading main-color-bg">
         <h3 className="panel-title">Credit Wallet Form</h3>
         </div>
         <div className="panel-body">
         {!isEmpty(error) && (
              <ErrorAlertNotification
                errors={error}
                onClick={this.handleDelete}
              />
              )}
                <form>
    <div className="form-row">
      <div class="text-center text-danger">
      <p>Please Note: You are only allow to credit from NGN 50 and above</p>
      <hr />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="lastName">Amount</label>
        <TextField
          error={errors.amount}
          onChange={this.onChange}
          value={amount || ''}
          className="myamount"
          placeholder="Enter Amount"
          field="amount"
          type="text"
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="email"> Email </label>
        <TextField
          error={errors.email}
          onChange={this.onChange}
          value={customer.email}
          className="myemail"
          placeholder="Enter your email"
          type="email"
          field="customer.email"
        />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="firstName">First Name</label>
        <TextField
          error={errors.firstname}
          onChange={this.onChange}
          value={customer.firstname || ''}
          className="myfirstname"
          placeholder="Enter First Name"
          field="customer.firstname"
          type="text"
        />
      </div>
      <div className=" form-group col-md-6">
        <label htmlFor="firstName">Last Name</label>
        <TextField
          error={errors.lastname}
          onChange={this.onChange}
          value={customer.lastname || ''}
          className="mylastname"
          id="address"
          placeholder="Enter Last Name"
          field="customer.lastname"
          type="text"
        />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="phone">Phone Number</label>
        <TextField
          error={errors.phone}
          onChange={this.onChange}
          value={customer.phone || ''}
          className="myphone"
          placeholder="Enter Phone Number"
          field="customer.phone"
          type="text"
        />
      </div>
      </div>
  </form>
  </div>
  <hr />
  <div class="form-group text-center">
                  {
                    isLoading ? (
                    <a
                    href="#"
                    type="submit"
                    className="btn btn-danger"
                  >
                  <i className="fa fa-spinner fa-spin" />
                  {' '} 
                  Credit My Wallet
                  </a>
                  

                    ) : 
                    (
                    <a
                    href="#"
                    type="submit"
                    className="btn btn-danger"
                    onClick={this.onSubmit}
                  >
                      {' '}
                      Credit My Wallet
                  </a>
                    )
                  }
                </div>

         </div>
         </div>
     </div>
   );
   return <div>{creditWalletForm}</div>;
 }
}

InstaPayCreditWalletForm.propTypes = {
  creditWallet: PropTypes.func.isRequired,
  status: PropTypes.bool,
  url: PropTypes.string
};

const mapStateToProps = state => ({
  url: state.creditWallet.creditWallet,
  status: state.creditWallet.status,
  error: state.creditWallet.error
});

export default connect(mapStateToProps, { creditWallet, deleteCreditWalletErrorMessage })(InstaPayCreditWalletForm);
