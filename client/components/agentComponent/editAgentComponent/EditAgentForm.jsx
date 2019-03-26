import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import TextField from '../../commons/TextField.jsx';
import fetchSingleAgent from '../../../actions/getSingleAgentAction';
import updateAgentInput from '../../../middleware/updateAgentInput';
import updateAgentRequest, { deleteUpdateAgentErrorMessages } from '../../../actions/updateAgentAction';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';

class EditAgentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.singleAgent ? this.props.singleAgent._id: '',
            phoneNumber: this.props.singleAgent ? this.props.singleAgent.phoneNumber: '',
            fullname: this.props.singleAgent ? this.props.singleAgent.fullname: '',
            address: this.props.singleAgent ? this.props.singleAgent.address: '',
            email: this.props.singleAgent ? this.props.singleAgent.email: '',
            age: this.props.singleAgent ? this.props.singleAgent.age: '',
            meansOfId: this.props.singleAgent ? this.props.singleAgent.meansOfId: 'sample',
            guarantorsFullName: this.props.singleAgent ? this.props.singleAgent.guarantorsFullName: '',
            guarantorsPhonenumber: this.props.singleAgent ? this.props.singleAgent.guarantorsPhonenumber: '',
            guarantorsAddress: this.props.singleAgent ? this.props.singleAgent.guarantorsAddress: '',
            idNumber: this.props.singleAgent ? this.props.singleAgent.idNumber: '',
            errors: {},
            isLoading: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
  
  /**
   *
   * @param {*} nextProps
   * @returns {*} - single master agent object
   */
  static getDerivedStateFromProps(props, state) {
    if (props.singleAgent._id == state.id) {
        return null
    }

    return {
        id: props.singleAgent._id,
        phoneNumber: props.singleAgent.phoneNumber,
        fullname: props.singleAgent.fullname,
        address: props.singleAgent.address,
        email: props.singleAgent.email,
        age: props.singleAgent.age,
        meansOfId: props.singleAgent.meansOfId,
        guarantorsFullName: props.singleAgent.guarantorsFullName,
        guarantorsPhonenumber: props.singleAgent.guarantorsPhonenumber,
        guarantorsAddress: props.singleAgent.guarantorsAddress,
        isNumber: props.singleAgent.isNumber,
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
    this.setState({ errors: {}, isLoading: true });
    const { updateAgentRequest } = this.props;
    updateAgentRequest(this.state);
  }

  handleDelete(){
    const { deleteUpdateAgentErrorMessages } = this.props;
    deleteUpdateAgentErrorMessages();
    this.setState({ isLoading: false });
  }

    render() {
        const {
            phoneNumber,
            fullname,
            address,
            bvn,
            email,
            age,
            meansOfId,
            guarantorsFullName,
            guarantorsPhonenumber,
            guarantorsAddress,
            idNumber,
            errors,
            isLoading,
        } = this.state;

        const { error, success } = this.props;

        const meansOfIdentificationList = ['Select', 'voters card','international passport','national id card','drivers license']
        if(success) {
          window.location.href = "/agents"
        }
        const editAgentForm = (
            <div>
            <div class="col-md-9">
              <div class="panel panel-default">
                <div class="panel-heading main-color-bg">
                  <h3 class="panel-title">Update Agents Form</h3>
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
                      <div class="form-group col-md-4">
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
                      <div class="form-group col-md-4">
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
                    </div>
    
                    <div class="form-row">
                      <div class="form-group col-md-4">
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
                      <div class="form-group col-md-4">
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
                      <div class="form-group col-md-4">
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
                    </div>
    
                    <div class="form-row">
                      <div class="form-group col-md-4">
                      <label>Guarantor Address</label>
                    <TextField
                      error={errors.guarantorsAddress}
                      onChange={this.onChange}
                      value={guarantorsAddress}
                      field="guarantorsAddress"
                      type="text"
                      className="myguarantorAddress"
                      placeholder="Enter Guarantor Address"
                    />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                      <label>Guarantor Fullname</label>
                    <TextField
                      error={errors.guarantorsFullName}
                      onChange={this.onChange}
                      value={guarantorsFullName}
                      field="guarantorsFullName"
                      type="text"
                      className="myguarantorFullname"
                      placeholder="Enter Guarantor Fullname"
                    />
                      </div>
                      <div class="form-group col-md-4">
                      <label>Guarantor Phone Number</label>
                    <TextField
                      error={errors.guarantorsPhonenumber}
                      onChange={this.onChange}
                      value={guarantorsPhonenumber}
                      field="guarantorsPhonenumber"
                      type="text"
                      className="myguarantorPhonenumber"
                      placeholder="Enter Guarantor Phonenumber"
                    />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                      <label>Identification Number</label>
                    <TextField
                      error={errors.idNumber}
                      onChange={this.onChange}
                      value={idNumber}
                      field="idNumber"
                      type="text"
                      className="myidNumber"
                      placeholder="Enter Identification Number"
                    />
                      </div>
                      <div class="form-group col-md-4">
                      <label htmlFor="email">Select Means of Identification </label>
                     <select
                       className="form-control select2"
                       onChange={this.onChange}
                       name="meansOfId"
                       value={meansOfId}
                     >
                       {
                              meansOfIdentificationList.map(idMeans => (
                                <option value={idMeans}>
                                  {idMeans}
                                </option>
                              ))
                          }
                     </select>
                      </div>
                    </div>
                  </form>
                  <br />
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
                  Update Agent
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
                      Update Agent
                  </a>
                    )
                  }
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
      singleAgent: state.singleAgentRequests.singleAgent,
      error: state.updateAgent.error,
      success: state.updateAgent.success
    };
  };

export default connect(mapStateToProps, { fetchSingleAgent, updateAgentRequest, deleteUpdateAgentErrorMessages })(EditAgentForm);
