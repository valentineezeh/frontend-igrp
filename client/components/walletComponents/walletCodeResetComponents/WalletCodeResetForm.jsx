import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import walletCodeResetInput from "../../../middleware/walletCodeResetInput";
import TextField from "../../commons/TextField.jsx";
import resetPasscodeRequest, { deleteResetPasscodeError } from '../../../actions/walletActions/resetWalletCode';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';

/**
 * @class DriverForm
 */
class WalletCodeResetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousCode: '',
      newCode: '',
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
    const { errors, isValid } = walletCodeResetInput(this.state);
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
    this.props.resetPasscodeRequest(this.state);
    }
  }

  handleDelete(){
    const { deleteResetPasscodeError } = this.props;
    deleteResetPasscodeError();
    this.setState({ isLoading: false });
  }

  render() {
    const {
      errors,
      previousCode,
      newCode,
      isLoading
    } = this.state;

    const { error } = this.props;

    // if (status) {
    //   return <Redirect to="/vehicles" />;
    // }

    const WalletCodeResetForm = (
      <div>
        <div className="col-md-9" id="transaction">
          <div className="panel panel-default">
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">Code Reset Form</h3>
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
                    <label>Previous Wallet Code</label>
                    <TextField
                      error={errors.previousCode}
                      onChange={this.onChange}
                      value={previousCode}
                      field="previousCode"
                      type="text"
                      className="mypreviousCode"
                      placeholder="Enter Your Previous Code..."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>New Wallet Code</label>
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
                  Reset Wallet Code
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
                      Reset Wallet Code
                  </a>
                    )
                  }
                </div>
                <br />
          </div>
        </div>
      </div>
    );
    return <div>{WalletCodeResetForm}</div>;
  }
}

WalletCodeResetForm.propTypes = {
    resetPasscodeRequest: PropTypes.func.isRequired,
    deleteResetPasscodeError: PropTypes.func.isRequired
};

WalletCodeResetForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  status: state.resetWalletPasscode.status,
  error: state.resetWalletPasscode.error
});

export default connect(mapStateToProps, { resetPasscodeRequest, deleteResetPasscodeError })(WalletCodeResetForm);

