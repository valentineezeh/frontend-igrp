import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import walletRecoveryCodeInput from "../../../middleware/walletRecoverCode";
import TextField from "../../commons/TextField.jsx";
import fetchBanksRequest from '../../../actions/walletTransactionActions/fetchAllBanksAction';
// import recoverCodeWalletRequest, { deleteRecoverWalletCodeError } from '../../../actions/walletActions/recoverWalletCode';
// import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';

/**
 * @class WalletCodeRecoveryForm
 */
class VerifyBankAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountNo: '',
      bankCode: '0000',
      errors: {},
      isLoading: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
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
    const { errors, isValid } = walletRecoveryCodeInput(this.state);
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
    // this.props.recoverCodeWalletRequest(this.state);
    }
  }

//   handleDelete(){
//     const { deleteRecoverWalletCodeError } = this.props;
//     deleteRecoverWalletCodeError();
//     this.setState({ isLoading: false });
//   }

  render() {
    const {
      errors,
      accountNo,
      bankCode,
      isLoading
    } = this.state;

    const { allBankList } = this.props;
    const bankList = Object.keys(allBankList).map(key => allBankList[key]);
    bankList.splice(0,0,{
        "name": "Select Bank",
        "code": "000",
        "country": "NG"
      });

    const verifyBankAccountForm = (
      <div>
        <div className="col-md-9" id="transaction">
          <div className="panel panel-default">
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">verify Bank Details Form</h3>
            </div>
            <div className="panel-body">
            {/* {!isEmpty(error) && (
              <ErrorAlertNotification
                errors={error}
                onClick={this.handleDelete}
              />
              )} */}
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
                  Verify Bank Details
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
                      Verify Bank Details
                  </a>
                    )
                  }
                </div>
                <br />
          </div>
        </div>
      </div>
    );
    return <div>{verifyBankAccountForm}</div>;
  }
}

VerifyBankAccountForm.propTypes = {
  fetchBanksRequest: PropTypes.func.isRequired,
// deleteRecoverWalletCodeError: PropTypes.func.isRequired
};

VerifyBankAccountForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  allBankList: state.allBanks
});

export default connect(mapStateToProps, { fetchBanksRequest })(VerifyBankAccountForm);
