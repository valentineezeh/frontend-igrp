import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import TextField from "../../commons/TextField.jsx";
import validateInput from "../../../middleware/agentInputValidate";
import SubmitButton from "../../commons/SubmitButton.jsx";
import agentRequest from "../../../actions/postAgentsAction";

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
      this.props.agentRequest(this.state);
    }
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
      age
    } = this.state;

    const { status } = this.props;

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
                      className="myphonenumber"
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

                <div class="form-group text-center">
                  <SubmitButton
                    type="submit"
                    className="mybutton"
                    onClick={this.onSubmit}
                    label="Create Agent"
                  />
                </div>
              </form>
              <br />
            </div>
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
  status: state.postAgent.status
});

export default connect(
  mapStateToProps,
  { agentRequest }
)(AgentForm);
