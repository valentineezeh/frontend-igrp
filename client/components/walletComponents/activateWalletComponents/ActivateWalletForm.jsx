import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import activateWalletInput from "../../../middleware/activateWalletInput";
import TextField from "../../commons/TextField.jsx";
import activateWalletRequest, { deleteActivateWalletError } from '../../../actions/walletActions/activateWallet';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';

/**
 * @class ActivateWalletForm
 */
class ActivateWalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passCode: '',
      securityQuestion: '',
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
    const { errors, isValid } = activateWalletInput(this.state);
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
    this.props.activateWalletRequest(this.state);
    }
  }

  handleDelete(){
    const { deleteActivateWalletError } = this.props;
    deleteActivateWalletError();
    this.setState({ isLoading: false });
  }

  render() {
    const {
      errors,
      passCode,
      securityQuestion,
      securityAnswer,
      isLoading
    } = this.state;

    const { status, error } = this.props;

    if (status) {
      return <Redirect to="/dashboard" />;
    }

    const activateWalletForm = (
      <div>
        <div className="col-md-9" id="transaction">
          <div className="panel panel-default">
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">Wallet</h3>
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
                    <label>Pass Code</label>
                    <TextField
                      error={errors.passCode}
                      onChange={this.onChange}
                      value={passCode}
                      field="passCode"
                      type="text"
                      className="mypassCode"
                      placeholder="Enter Your Pass Code..."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Security Question</label>
                    <TextField
                      error={errors.securityQuestion}
                      onChange={this.onChange}
                      value={securityQuestion}
                      field="securityQuestion"
                      type="text"
                      className="mysecurityquestion"
                      placeholder="Enter Your Security Question"
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
                  Activate Wallet
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
                      Activate Wallet
                  </a>
                    )
                  }
                </div>
                <br />
          </div>
        </div>
      </div>
    );
    return <div>{activateWalletForm}</div>;
  }
}

ActivateWalletForm.propTypes = {
activateWalletRequest: PropTypes.func.isRequired,
deleteActivateWalletError: PropTypes.func.isRequired
};

ActivateWalletForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  status: state.activateWallet.status,
  error: state.activateWallet.error
});

export default connect(mapStateToProps, { activateWalletRequest, deleteActivateWalletError })(ActivateWalletForm);
