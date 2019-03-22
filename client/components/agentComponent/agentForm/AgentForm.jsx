import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from 'is-empty';
import TextField from "../../commons/TextField.jsx";
import validateInput from "../../../middleware/agentInputValidate";
import SubmitButton from "../../commons/SubmitButton.jsx";
import agentRequest, { deleteErrorMessages } from "../../../actions/postAgentsAction";
import IsLoading from '../../commons/IsLoading.jsx';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';

/**
 * @class AgentForm
 */
class AgentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      address: "",
      age: "",
      phoneNumber: "",
      bvn: "",
      nimc: "",
      password: "",
      driverLicence: '',
      errors: {},
      isLoading: false,
      done: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: false });
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
      this.props.agentCallBack(this.state.isLoading);
      this.props.agentRequest(this.state);
    }
  }

  handleDelete(){
    const { deleteErrorMessages } = this.props;
    deleteErrorMessages();
    this.setState({ isLoading: false });
  }

  render() {
    const {
      errors,
      phoneNumber,
      password,
      email,
      address,
      fullname,
      bvn,
      nimc,
      age,
      driverLicence,
      isLoading
    } = this.state;

    const { status, error } = this.props;

    if (status) {
      return <Redirect to="/agents" />;
    }

    const agentForm = (
      <div>
        <div class="col-md-9">
          <div class="panel panel-default">
            <div class="panel-heading main-color-bg">
              <h3 class="panel-title">Create Agents</h3>
            </div>
            <div class="panel-body">
            {!isEmpty(error) && (
              <ErrorAlertNotification
                errors={error}
                onClick={this.handleDelete}
              />
              )}
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Phone Number</label>
                    <TextField
                      error={errors.phoneNumber}
                      onChange={this.onChange}
                      value={phoneNumber}
                      field="phoneNumber"
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>Fullname</label>
                    <TextField
                      error={errors.fullname}
                      onChange={this.onChange}
                      value={fullname}
                      field="fullname"
                      type="text"
                      className="myfullname"
                      placeholder="Fullname"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Email</label>
                    <TextField
                      error={errors.email}
                      onChange={this.onChange}
                      value={email}
                      field="email"
                      type="email"
                      className="myemail"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>Address</label>
                    <TextField
                      error={errors.address}
                      onChange={this.onChange}
                      value={address}
                      field="address"
                      type="text"
                      className="myaddress"
                      placeholder="Address"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Age</label>
                    <TextField
                      error={errors.age}
                      onChange={this.onChange}
                      value={age}
                      field="age"
                      type="text"
                      className="myage"
                      placeholder="Age"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>BVN</label>
                    <TextField
                      error={errors.bvn}
                      onChange={this.onChange}
                      value={bvn}
                      field="bvn"
                      type="password"
                      className="mybvn"
                      placeholder="BVN"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>NIMC</label>
                    <TextField
                      error={errors.nimc}
                      onChange={this.onChange}
                      value={nimc}
                      field="nimc"
                      type="text"
                      className="mynimc"
                      id="inputEmail4"
                      placeholder="NIMC"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>Password</label>
                    <TextField
                      error={errors.password}
                      onChange={this.onChange}
                      value={password}
                      field="password"
                      type="password"
                      className="mypassword"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Driver Licence</label>
                    <TextField
                      error={errors.driverLicence}
                      onChange={this.onChange}
                      value={driverLicence}
                      field="driverLicence"
                      type="text"
                      className="mydriver"
                      id="inputEmail4"
                      placeholder="Enter Driver Licence"
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
                  Create Agent
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
                      Create Agent
                  </a>
                    )
                  }
                </div>
              <br />
            </div>
        </div>
      </div>
    );
    return <div>{agentForm}</div>;
  }
}

AgentForm.propTypes = {
  agentRequest: PropTypes.func.isRequired
};

AgentForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  status: state.postAgent.status,
  error: state.postAgent.error
});

export default connect(
  mapStateToProps,
  { agentRequest, deleteErrorMessages }
)(AgentForm);
