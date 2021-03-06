import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import isEmpty from 'is-empty';
import TextField from "../commons/TextField.jsx";
import validateInput from "../../middleware/loginValidate";
import userLoginRequest, { deleteErrorMessages } from "../../actions/loginAction.js";
import ErrorAlertNotification from '../commons/ErrorAlertNotification.jsx';

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

  handleDelete() {
    const { deleteErrorMessage } = this.props;
    deleteErrorMessage();
    this.setState({ isLoading: false });
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
    const { errors, phoneNumber, password, isLoading } = this.state;
    const { auth, error } = this.props;

    if (auth) {
      return <Redirect to="/dashboard" />;
    }

    const form = (
      <div className="hero-image">
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center">
                  Admin Area <br />
                  <small>Account Login</small>
                </h2>
              </div>
            </div>
          </div>
        </header>
        <div className="login-page">
          <div className="form">
            <form className="login-form">
            <h2>Login Form</h2>
            <hr />
            {!isEmpty(error) && (
              <ErrorAlertNotification
                errors={error}
                onClick={this.handleDelete}
              />
              )}
              <TextField
                    error={errors.phoneNumber}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    field="phoneNumber"
                    className="loginInput"
                  />
                  <TextField
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                    value={password}
                    field="password"
                    className="loginInput"
                  />
                                  {
                    isLoading ? (
                    <a
                    href="#"
                    type="submit"
                    className="btn btn-danger btn-block"
                  >
                  <i className="fa fa-spinner fa-spin" />
                  {' '} 
                  Login
                  </a>
                  

                    ) : 
                    (
                    <a
                    href="#"
                    type="submit"
                    className="btn btn-danger btn-block"
                    onClick={this.onSubmit}
                  >
                      {' '}
                      Login
                  </a>
                    )
                  }
               <p className="message">Welcome Admin! <a href="#">Please use the above form to access the dashboard</a></p>
    </form>
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
  auth: state.auth.isAuthenticated,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  userLoginRequest: user => dispatch(userLoginRequest(user)),
  deleteErrorMessage: () => dispatch(deleteErrorMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
