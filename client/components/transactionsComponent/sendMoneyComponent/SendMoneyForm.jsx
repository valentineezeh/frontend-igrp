import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isEmpty from 'is-empty';
import sendMoneyInput from "../../../middleware/sendMoneyInput";
import TextField from "../../commons/TextField.jsx";
import sendMoneyToWalletRequest, { deleteSendMoneyErrorMessage } from '../../../actions/walletTransactionActions/sendMoneyAction';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';

/**
 * @class WalletCodeRecoveryForm
 */
class SendMoneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receiverNumber: '',
      amount: '',
      passCode: '',
      description: '',
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
    const { errors, isValid } = sendMoneyInput(this.state);
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
      this.props.sendMoneyToWalletRequest(this.state);
    }
  }

  handleDelete(){
    const { deleteSendMoneyErrorMessage } = this.props;
    deleteSendMoneyErrorMessage();
    this.setState({ isLoading: false });
  }

  render() {
    const {
      errors,
      receiverNumber,
      amount,
      passCode,
      description,
      isLoading
    } = this.state;

    const { error, status } = this.props;

    if( status ) {
      return <Redirect to="/transactions-history" />
    }
    
    const sendMoneyForm = (
      <div>
        <div className="col-md-9" id="transaction">
          <div className="panel panel-default">
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">Send Money Form</h3>
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
                    <label>Receiver Phone Number</label>
                    <TextField
                      error={errors.receiverNumber}
                      onChange={this.onChange}
                      value={receiverNumber}
                      field="receiverNumber"
                      type="text"
                      className="myreceiverNumber"
                      placeholder="Enter Receiver Phone Number..."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Amount</label>
                    <TextField
                      error={errors.amount}
                      onChange={this.onChange}
                      value={amount}
                      field="amount"
                      type="text"
                      className="myamount"
                      placeholder="Enter the amount you are sending.."
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Wallet Passcode</label>
                    <TextField
                      error={errors.passCode}
                      onChange={this.onChange}
                      value={passCode}
                      field="passCode"
                      type="text"
                      className="mypasscode"
                      placeholder="Enter Your Pass Code"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Payment Description</label>
                    <TextField
                      error={errors.description}
                      onChange={this.onChange}
                      value={description}
                      field="description"
                      type="text"
                      className="mydiscription"
                      placeholder="Enter Your Payment Description"
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
                  Send Money
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
                      Send Money
                  </a>
                    )
                  }
                </div>
                <br />
          </div>
        </div>
      </div>
    );
    return <div>{sendMoneyForm}</div>;
  }
}

SendMoneyForm.propTypes = {
    sendMoneyToWalletRequest: PropTypes.func.isRequired,
    deleteSendMoneyErrorMessage: PropTypes.func.isRequired
};

SendMoneyForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  status: state.sendMoneyToWallet.status,
  error: state.sendMoneyToWallet.error
});

export default connect(mapStateToProps, { sendMoneyToWalletRequest, deleteSendMoneyErrorMessage })(SendMoneyForm);
