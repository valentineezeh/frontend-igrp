import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from 'is-empty';
import TextField from '../commons/TextField.jsx';
import confirmBvnRequest, { deleteConfirmBvnError } from '../../actions/confirmBvnAction';
import confirmNinRequest, { deleteConfirmNinError } from '../../actions/confirmNinAction';
import ErrorAlertNotification from '../commons/ErrorAlertNotification.jsx'


/**
 * @class ConfirmIDForm
 */
class ConfirmIDForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bvn: '',
      nin: '',
      errors: {},
      isLoading: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.ninHandleDelete = this.ninHandleDelete.bind(this);
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

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onSubmit(event) {
    event.preventDefault();
    if(this.state.nin === '' || this.state.nin === null){
      if(this.state.bvn === '' || this.state.bvn === null){
        return this.setState({ errors: {bvn: "This field is required"}})
      }
      this.props.confirmBvnRequest(this.state.bvn);
      this.setState({ errors: {}, isLoading: true });
    }
    if(this.state.bvn === '' || this.state.bvn === null){
      if(this.state.nin === '' || this.state.nin === null){
        return this.setState({ errors: {nin: "This field is required"}})
      }
    this.props.confirmNinRequest(this.state.nin);
    this.setState({ errors: {}, isLoading: true });
    }
  }

  handleDelete(){
    const { deleteConfirmBvnError } = this.props;
    deleteConfirmBvnError();
    this.setState({ isLoading: false });
  }

  ninHandleDelete(){
    const { deleteConfirmNinError } = this.props;
    deleteConfirmNinError();
    this.setState({ isLoading: false });
  }

  render() {
    const {
      errors,
      bvn,
      nin,
      isLoading
    } = this.state;

    const { status, error, ninStatus, ninError } = this.props;

    if (status) {
      return <Redirect to="/create-agent" />;
    }

    if (ninStatus) {
      return <Redirect to="/create-agent" />;
    }

    const confirmIDForm = (
      <div>
        <div class="col-md-9" id="transaction">
          <div class="panel panel-default">
            <div class="panel-heading main-color-bg">
              <h3 class="panel-title">Confirm Agents</h3>
            </div>
            <div class="panel-body">
              <div class="text-center text-danger">
                <p>You can use either BVN or NIN to confirm an agent. Note you must do this in order to create an Agent.</p>
              </div>
              <hr />
              <form>
              {
            
              !isEmpty(error) ? (
              <ErrorAlertNotification
                errors={error}
                onClick={this.handleDelete}
              />
              )
              :
              null
              
              }
              {
                !isEmpty(ninError) ? (
                  <ErrorAlertNotification
                    errors={ninError}
                    onClick={this.ninHandleDelete}
                  />
                  )
                  :
                  null
              }
                <div class="form-row text-center">
                <div class="form-group col-md-5">
                    <label>BVN</label>
                    <TextField
                      error={errors.bvn}
                      onChange={this.onChange}
                      value={bvn}
                      field="bvn"
                      type="text"
                      className="mybvn"
                      placeholder="Enter BVN Number"
                    />
                  </div>
                  <div class="form-group col-md-2 separator" >
                  <label>Or</label>
                  </div>
                  <div class="form-group col-md-5" id="idNIN">
                    <label>NIN</label>
                    <TextField
                      error={errors.nin}
                      onChange={this.onChange}
                      value={nin}
                      field="nin"
                      type="text"
                      className="mynin"
                      placeholder="Enter NIN Number"
                    />
                  </div>
                </div>
                <hr />
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
                  Confirm Agent
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
                      Confirm Agent
                  </a>
                    )
                  }
                </div>
              <br />
            </div>
        </div>
      </div>
    );
    return <div>{confirmIDForm}</div>;
  }
}

ConfirmIDForm.propTypes = {
  confirmBvnRequest: PropTypes.func.isRequired
};

ConfirmIDForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  status: state.confirmBvn.status,
  error: state.confirmBvn.error,
  ninStatus: state.confirmNinRequest.status,
  ninError: state.confirmNinRequest.error
});

export default connect(
  mapStateToProps, { confirmBvnRequest, deleteConfirmBvnError, confirmNinRequest, deleteConfirmNinError }
)(ConfirmIDForm);
