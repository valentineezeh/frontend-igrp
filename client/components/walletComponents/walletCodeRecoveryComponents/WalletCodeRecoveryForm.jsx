import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import walletRecoveryCodeInput from "../../../middleware/walletRecoverCode";
import TextField from "../../commons/TextField.jsx";
import recoverCodeWalletRequest, { deleteRecoverWalletCodeError } from '../../../actions/walletActions/recoverWalletCode';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';

/**
 * @class WalletCodeRecoveryForm
 */
class WalletCodeRecoveryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCode: '',
      confirmNewCode: '',
      securityAnswer: '',
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
    this.props.recoverCodeWalletRequest(this.state);
    }
  }

  handleDelete(){
    const { deleteRecoverWalletCodeError } = this.props;
    deleteRecoverWalletCodeError();
    this.setState({ isLoading: false });
  }

  render() {
    const {
      errors,
      newCode,
      confirmNewCode,
      securityAnswer,
      isLoading
    } = this.state;

    const { error } = this.props;

    const walletCodeRecoveryForm = (
      <div>
        <div className="col-md-9" id="transaction">
          <div className="panel panel-default">
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">Wallet Code Recovery</h3>
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
                    <label>New Code</label>
                    <TextField
                      error={errors.newCode}
                      onChange={this.onChange}
                      value={newCode}
                      field="newCode"
                      type="text"
                      className="mynewCode"
                      placeholder="Enter Your New Code..."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Confirm New Code</label>
                    <TextField
                      error={errors.confirmNewCode}
                      onChange={this.onChange}
                      value={confirmNewCode}
                      field="confirmNewCode"
                      type="text"
                      className="myconfirmNewCode"
                      placeholder="Confirm your new code..."
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Security Answer</label>
                    <TextField
                      error={errors.securityAnswer}
                      onChange={this.onChange}
                      value={securityAnswer}
                      field="securityAnswer"
                      type="text"
                      className="mysecurityAnswer"
                      placeholder="Enter Your Security Answer"
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
                  Wallet Recovery Code
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
                      Wallet Recovery Code
                  </a>
                    )
                  }
                </div>
                <br />
          </div>
        </div>
      </div>
    );
    return <div>{walletCodeRecoveryForm}</div>;
  }
}

WalletCodeRecoveryForm.propTypes = {
recoverCodeWalletRequest: PropTypes.func.isRequired,
deleteRecoverWalletCodeError: PropTypes.func.isRequired
};

WalletCodeRecoveryForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  status: state.recoverWalletCode.status,
  error: state.recoverWalletCode.error
});

export default connect(mapStateToProps, { recoverCodeWalletRequest, deleteRecoverWalletCodeError })(WalletCodeRecoveryForm);
