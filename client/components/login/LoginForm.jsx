import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "../commons/TextField.jsx";
import validateInput from "../../middleware/loginValidate";
import SubmitButton from "../commons/SubmitButton.jsx";
import userLoginRequest from "../../actions/loginAction.js";

/**
 * @class LoginForm
 */
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      password: "",
      errors: {},
      isLoading: false,
      done: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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

  handleDelete() {
    const { deleteErrorMessage } = this.props;
    deleteErrorMessage();
    this.setState({
      password: ""
    });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
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
      this.props.userLoginRequest(this.state);
    }
  }

  render() {
    const { errors, phoneNumber, password } = this.state;
    const { auth } = this.props;

    if (auth) {
      return <Redirect to="/dashboard" />;
    }

    const form = (
      <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">
                  Admin Area <br />
                  <small>Account Login</small>
                </h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container" id="main">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <form id="login" className="well">
                <div className="form-group">
                  <label>Phone Number</label>
                  <TextField
                    error={errors.phoneNumber}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    field="phoneNumber"
                    className="myphonenumber"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <TextField
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                    className="mypassword"
                    placeholder="Password"
                    value={password}
                    field="password"
                  />
                </div>
                <SubmitButton
                  type="submit"
                  className="btn btn-default btn-block"
                  onClick={this.onSubmit}
                  label="Login"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{form}</div>;
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  error: PropTypes.shape({}),
  deleteErrorMessage: PropTypes.func,
  auth: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  userLoginRequest: user => dispatch(userLoginRequest(user)),
  deleteErrorMessage: () => dispatch(deleteErrorMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
