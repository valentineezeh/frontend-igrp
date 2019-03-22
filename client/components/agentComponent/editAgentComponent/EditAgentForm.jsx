import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '../../commons/TextField.jsx';
import SubmitButton from '../../commons/SubmitButton.jsx';
import fetchSingleAgent from '../../../actions/getSingleAgentAction';
import updateAgentInput from '../../../middleware/updateAgentInput';

class EditAgentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.singleAgent ? this.props.singleAgent._id: '',
            phoneNumber: this.props.singleAgent ? this.props.singleAgent.phoneNumber: '',
            password: this.props.singleAgent ? this.props.singleAgent.password: '',
            fullname: this.props.singleAgent ? this.props.singleAgent.fullname: '',
            address: this.props.singleAgent ? this.props.singleAgent.address: '',
            bvn: this.props.singleAgent ? this.props.singleAgent.bvn: '',
            nimc: this.props.singleAgent ? this.props.singleAgent.nimc: '',
            driverLicense: this.props.singleAgent ? this.props.singleAgent.driverLicense: '',
            email: this.props.singleAgent ? this.props.singleAgent.email: '',
            age: this.props.singleAgent ? this.props.singleAgent.age: '',
            imenumber: this.props.singleAgent ? this.props.singleAgent.imenumber: '',
            errors: {},
            isLoading: false,
        }
        this.onEditAgent = this.onEditAgent.bind(this);
    }
  
  /**
   *
   * @param {*} nextProps
   * @returns {*} - single master agent object
   */
  static getDerivedStateFromProps(props, state) {
    console.log('===>', props.singleAgent._id, state.id);
    if (props.singleAgent._id === state.id) {
        return null;
    }

    return {
        id: props.singleAgent._id,
        phoneNumber: props.singleAgent.phoneNumber,
        password: props.singleAgent.password,
        fullname: props.singleAgent.fullname,
        address: props.singleAgent.address,
        bvn: props.singleAgent.bvn,
        nimc: props.singleAgent.nimc,
        driverLicense: pops.singleAgent.driverLicense,
        email: props.singleAgent.email,
        age: props.singleAgent.age,
        imenumber: props.singleAgent.imenumber,

    };
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
  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onSubmit(event) {
    event.preventDefault();
    console.log('I got here 2')
    if (this.isValid()) {
      console.log('I got here')
      this.setState({ errors: {}, isLoading: true });
    }
  }

  onEditAgent(event) {
      event.preventDefault();
      this.setState({isLoading: true})
  }

  isValid() {
    console.log('I got here 3')
    const { errors, isValid } = updateAgentInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
    render() {
        const {
            phoneNumber,
            password,
            fullname,
            address,
            bvn,
            nimc,
            driverLicense,
            email,
            age,
            imenumber,
            errors,
            isLoading,
        } = this.state
        const editAgentForm = (
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
                          value={phoneNumber || ''}
                          field="phoneNumber"
                          type="text"
                          className="form-control"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label>Fullname</label>
                        <TextField
                          error={errors.fullname}
                          onChange={this.onChange}
                          value={fullname || ''}
                          field="fullname"
                          type="text"
                          className="myfullname"
                          placeholder="Enter Fullname"
                        />
                      </div>
                    </div>
    
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Email</label>
                        <TextField
                          error={errors.email}
                          onChange={this.onChange}
                          value={email || ''}
                          field="email"
                          type="email"
                          className="myemail"
                          placeholder="Enter Email"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label>Address</label>
                        <TextField
                          error={errors.address}
                          onChange={this.onChange}
                          value={address || ''}
                          field="address"
                          type="text"
                          className="myaddress"
                          placeholder="Enter Your Address"
                        />
                      </div>
                    </div>
    
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Age</label>
                        <TextField
                          error={errors.age}
                          onChange={this.onChange}
                          value={age || ''}
                          field="age"
                          type="text"
                          className="myage"
                          placeholder="Enter Age"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label>BVN</label>
                        <TextField
                          error={errors.bvn}
                          onChange={this.onChange}
                          value={bvn || ''}
                          field="bvn"
                          type="password"
                          className="mybvn"
                          placeholder="Enter your BVN"
                        />
                      </div>
                    </div>
    
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>NIMC</label>
                        <TextField
                          error={errors.nimc}
                          onChange={this.onChange}
                          value={nimc || ''}
                          field="nimc"
                          type="text"
                          className="mynimc"
                          id="inputEmail4"
                          placeholder="Enter NIMC Number"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label>Driver License</label>
                        <TextField
                          error={errors.driverLicense}
                          onChange={this.onChange}
                          value={driverLicense || ''}
                          field="driverLicense"
                          type="text"
                          className="mydriverLicense"
                          placeholder="Enter Your Driver License"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>IME Number</label>
                        <TextField
                          error={errors.imenumber}
                          onChange={this.onChange}
                          value={imenumber || ''}
                          field="imenumber"
                          type="text"
                          className="myimenumber"
                          placeholder="Enter Your IME Number"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label>Password</label>
                        <TextField
                          error={errors.password}
                          onChange={this.onChange}
                          value={password || ''}
                          field="password"
                          type="text"
                          className="mypassword"
                          placeholder="Enter Your Password"
                        />
                      </div>
                    </div>
                  </form>
                  <br />
                </div>
                <div class="form-group text-center">
                      <SubmitButton
                        type="submit"
                        className="mybutton"
                        onClick={this.onSubmit}
                        label="Update Agent"
                      />
                    </div>
              </div>
            </div>
          </div> 
        )
        return <div>{editAgentForm}</div>
    }
}

EditAgentForm.propTypes = {
    singleAgent: PropTypes.shape({}).isRequired,
  };

const mapStateToProps = state => {
    return {
      singleAgent: state.singleAgentRequests.singleAgent
    };
  };

export default connect(mapStateToProps, { fetchSingleAgent })(EditAgentForm);
