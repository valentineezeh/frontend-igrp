import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isEmpty from 'is-empty';
import TextField from "../../commons/TextField.jsx";
import fetchBanksRequest from '../../../actions/walletTransactionActions/fetchAllBanksAction';
import bankFundTransferRequest, { deleteBankTransferError } from '../../../actions/walletTransactionActions/transferFundFromWalletToBank';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';
import bankTransferInput from '../../../middleware/validateBankTransferInput';

/**
 * @class InstaPayBankTransferForm
 */
class InstaPayBankTransferForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountNo: '',
      bankCode: '0000',
      amount: '',
      errors: {},
      isLoading: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
   *
   * @param {*} prevProps
   * @returns {*} - object
   */
  componentWillMount() {
    this.props.fetchBanksRequest();
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onChange(event) {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const error = Object.assign({}, errors);
      delete errors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        error
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  isValid() {
    const { errors, isValid } = bankTransferInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
    this.props.bankFundTransferRequest(this.state);
    }
  }

  handleDelete(){
    const { deleteBankTransferError } = this.props;
    deleteBankTransferError();
    this.setState({ isLoading: false });
  }

  render() {
    const {
      errors,
      accountNo,
      bankCode,
      amount,
      isLoading
    } = this.state;

    const { allBankList, error, status } = this.props;
    const bankList = Object.keys(allBankList).map(key => allBankList[key]);
    bankList.splice(0,0,{
        "name": "Select Bank",
        "code": "000",
        "country": "NG"
      });
      if(status){
          return <Redirect to="/dashboard"/>
      }
    const instaPayBankTransferForm = (
      <div>
        <div className="col-md-9" id="transaction">
          <div className="panel panel-default">
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">Wallet to Bank Transfer Form</h3>
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
                  <div className="form-group col-md-6">
                    <label>Bank Account Number</label>
                    <TextField
                      error={errors.accountNo}
                      onChange={this.onChange}
                      value={accountNo}
                      field="accountNo"
                      type="text"
                      className="myaccountNo"
                      placeholder="Enter Your Bank Account Number..."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Select Bank</label>
                    <select
                       className="form-control select2"
                       onChange={this.onChange}
                       name="bankCode"
                       value={bankCode}
                     >
                       {
                              bankList.map(banks => (
                                <option key={banks.code} value={banks.code}>
                                  {banks.name}
                                </option>
                              ))
                          }
                     </select>
                </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Amount to Transfer</label>
                    <TextField
                      error={errors.amount}
                      onChange={this.onChange}
                      value={amount}
                      field="amount"
                      type="text"
                      className="myamount"
                      placeholder="Enter Amount..."
                    />
                  </div>
                </div>
              </form>
            </div>
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
                  Transfer Funds
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
                      Transfer Funds
                  </a>
                    )
                  }
                </div>
                <br />
          </div>
        </div>
      </div>
    );
    return <div>{instaPayBankTransferForm}</div>;
  }
}

InstaPayBankTransferForm.propTypes = {
fetchBanksRequest: PropTypes.func.isRequired,
deleteBankTransferError: PropTypes.func.isRequired,
bankFundTransferRequest: PropTypes.func.isRequired
};

InstaPayBankTransferForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    allBankList: state.allBanks,
    status: state.bankFundTransfer.status,
    error: state.bankFundTransfer.error
});


export default connect(mapStateToProps, {
    fetchBanksRequest, deleteBankTransferError, bankFundTransferRequest
})(InstaPayBankTransferForm);
