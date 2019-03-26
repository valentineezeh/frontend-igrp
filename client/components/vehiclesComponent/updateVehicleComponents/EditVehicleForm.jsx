import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import isEmpty from 'is-empty';
import TextField from '../../commons/TextField.jsx';
import updateVehicleInput from '../../../middleware/updateVehicleInput';
import updateVehicleRequest, { deleteUpdateVehicleErrorMessages } from '../../../actions/updateVehicleAction';
import ErrorAlertNotification from '../../commons/ErrorAlertNotification.jsx';
import fetchSingleVehicle from '../../../actions/getSingleVehicleAction';

/**
 * @class EditvehicleForm
 */
class EditvehicleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.singleVehicle ? this.props.singleVehicle._id: '',
            phoneNumber: this.props.singleVehicle ? this.props.singleVehicle.phoneNumber : "",
            driversLicence: this.props.singleVehicle ? this.props.singleVehicle.driver : "",
            vehicleType: this.props.singleVehicle ? this.props.singleVehicle.vehicleType : "sample",
            vehicleNumber: this.props.singleVehicle ? this.props.singleVehicle.vehicleNumber : "",
            plateNumber: this.props.singleVehicle ? this.props.singleVehicle.plateNumber : "",
            RegistrationYear: this.props.singleVehicle ? this.props.singleVehicle.RegistrationYear : "",
            vehicleOwnerAdress: this.props.singleVehicle ? this.props.singleVehicle.vehicleOwnerAdress : "",
            vehicleOwnerName: this.props.singleVehicle ? this.props.singleVehicle.vehicleOwnerName : "",
            chasisNo: this.props.singleVehicle ? this.props.singleVehicle.chasisNo : "",
            engineNumber: this.props.singleVehicle ? this.props.singleVehicle.engineNumber : "",
            vehicleMake: this.props.singleVehicle ? this.props.singleVehicle.vehicleMake : "",
            vrtID: this.props.singleVehicle ? this.props.singleVehicle.vrtID : "",
            RoadWorthinessExpDate: this.props.singleVehicle ? this.props.singleVehicle.RoadWorthinessExpDate : "",
            InsuranceExpDate: this.props.singleVehicle ? this.props.singleVehicle.InsuranceExpDate : "",
            locationOfTransaction: this.props.singleVehicle ? this.props.singleVehicle.locationOfTransaction : "",
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
   * @returns {*} - single master vehicleOwnerNament object
   */
  static getDerivedStateFromProps(props, state) {
    if (props.singleVehicle._id == state.id) {
        return null
    }

    return {
        id: props.singleVehicle._id,
        phoneNumber: props.singleVehicle.phoneNumber,
        vehicleNumber: props.singleVehicle.vehicleNumber,
        vehicleType: props.singleVehicle.vehicleType,
        plateNumber: props.singleVehicle.plateNumber,
        driversLicence: props.singleVehicle.driversLicence,
        vehicleOwnerAdress: props.singleVehicle.vehicleOwnerAdress,
        vehicleOwnerName: props.singleVehicle.vehicleOwnerName,
        chasisNo: props.singleVehicle.chasisNo,
        engineNumber: props.singleVehicle.engineNumber,
        vehicleMake: props.singleVehicle.vehicleMake,
        vrtID: props.singleVehicle.vrtID,
        RoadWorthinessExpDate: props.singleVehicle.RoadWorthinessExpDate,
        InsuranceExpDate: props.singleVehicle.InsuranceExpDate,
        locationOfTransaction: props.singleVehicle.locationOfTransaction,
        RegistrationYear: props.singleVehicle.RegistrationYear,
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
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const { updateVehicleRequest } = this.props;
      updateVehicleRequest(this.state);
    }
  }

  handleDelete(){
    const { deleteUpdateVehicleErrorMessages  } = this.props;
    deleteUpdateVehicleErrorMessages();
    this.setState({ isLoading: false });
  }

  isValid() {
    const { errors, isValid } = updateVehicleInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
    render() {
        const {
            errors,
            phoneNumber,
            vehicleNumber,
            vehicleType,
            plateNumber,
            driversLicence,
            vehicleOwnerAdress,
            vehicleOwnerName,
            chasisNo,
            engineNumber,
            vehicleMake,
            vrtID,
            RoadWorthinessExpDate,
            InsuranceExpDate,
            locationOfTransaction,
            RegistrationYear,
            isLoading
        } = this.state;

        const VehicleTypeList = ['Select', "tipper",
    "taxi", "keke", "okada"]

        const { error, success } = this.props;

        if(success) {
          window.location.href = "/vehicles"
        }
        const editVehicleForm = (
            <div>
        <div className="col-md-9" id="transaction">
          <div className="panel panel-default">
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">Vehicles</h3>
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
                  <div className="form-group col-md-4">
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
                  <div className="form-group col-md-4">
                    <label>Registration Year</label>
                    <TextField
                      error={errors.RegistrationYear}
                      onChange={this.onChange}
                      value={RegistrationYear}
                      field="RegistrationYear"
                      type="date"
                      className="myRegistrationYear"
                      placeholder="Enter Vehicle Registration Year"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Vehicle Owner</label>
                    <TextField
                      error={errors.vehicleOwnerName}
                      onChange={this.onChange}
                      value={vehicleOwnerName}
                      field="vehicleOwnerName"
                      type="text"
                      className="myvehicleOwnerName"
                      placeholder="Enter Vehicle Owner Name"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Vehicle Owner Adress</label>
                    <TextField
                      error={errors.vehicleOwnerAdress}
                      onChange={this.onChange}
                      value={vehicleOwnerAdress}
                      field="vehicleOwnerAdress"
                      type="text"
                      className="myvehicleOwnerAdress"
                      placeholder="Enter Vehicle Owner Adress"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Vehicle Chasis</label>
                    <TextField
                      error={errors.chasisNo}
                      onChange={this.onChange}
                      value={chasisNo}
                      field="chasisNo"
                      type="text"
                      className="mychasisNo"
                      placeholder="Enter Vehicle Chasis Number"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Engine Number</label>
                    <TextField
                      error={errors.engineNumber}
                      onChange={this.onChange}
                      value={engineNumber}
                      field="engineNumber"
                      type="text"
                      className="myengineNumber"
                      placeholder="Enter Vehicle Engine Number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Vehicle Make</label>
                    <TextField
                      error={errors.vehicleMake}
                      onChange={this.onChange}
                      value={vehicleMake}
                      field="vehicleMake"
                      type="text"
                      className="myvehicleMake"
                      placeholder="Enter Vehicle Make"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>VRT ID</label>
                    <TextField
                      error={errors.vrtID}
                      onChange={this.onChange}
                      value={vrtID}
                      field="vrtID"
                      type="text"
                      className="myvrtID"
                      placeholder="Enter VRT ID"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Road Worthiness Exp Date</label>
                    <TextField
                      error={errors.RoadWorthinessExpDate}
                      onChange={this.onChange}
                      value={RoadWorthinessExpDate}
                      field="RoadWorthinessExpDate"
                      type="date"
                      className="myRoadWorthinessExpDate"
                      placeholder="may-01-2018"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Insurance Expired Date</label>
                    <TextField
                      error={errors.InsuranceExpDate}
                      onChange={this.onChange}
                      value={InsuranceExpDate}
                      field="InsuranceExpDate"
                      type="date"
                      className="myInsuranceExpDate"
                      placeholder="may-01-2018"
                    />
                  </div>
                </div>
                <div className="form-row">
                <div className="col-md-4 form-group">
                     <label htmlFor="vehicleOwnerAdress">Select Vehicle Type</label>
                     <select
                       className="form-control select2"
                       onChange={this.onChange}
                       name="vehicleType"
                       value={vehicleType}
                     >
                       {
                              VehicleTypeList.map(vehicleType => (
                                <option value={vehicleType}>
                                  {vehicleType}
                                </option>
                              ))
                          }
                     </select>
                   </div>
                  <div className="form-group col-md-4">
                    <label>Vehicle Number</label>
                    <TextField
                      error={errors.vehicleNumber}
                      onChange={this.onChange}
                      value={vehicleNumber}
                      field="vehicleNumber"
                      type="text"
                      className="myvehiclenumber"
                      placeholder="Vehicle Number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Plate Number</label>
                    <TextField
                      error={errors.plateNumber}
                      onChange={this.onChange}
                      value={plateNumber}
                      field="plateNumber"
                      type="text"
                      className="myplatenumber"
                      placeholder="Plate Number"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Transaction Location</label>
                    <TextField
                      error={errors.locationOfTransaction}
                      onChange={this.onChange}
                      value={locationOfTransaction}
                      field="locationOfTransaction"
                      type="text"
                      className="mylocationOfTransaction"
                      placeholder="Transaction Location"
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
                  Update Vehicle
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
                      Update Vehicle
                  </a>
                    )
                  }
                </div>
                <br />
          </div>
        </div>
      </div>
        )
        return <div>{editVehicleForm}</div>
    }
}

EditvehicleForm .propTypes = {
    singleVehicle: PropTypes.shape({}).isRequired,
  };

const mapStateToProps = state => {
    return {
      singleVehicle: state.singleVehicleRequest.singleVehicle,
      error: state.updateVehicle.error,
      success: state.updateVehicle.success
    };
  };

export default connect(mapStateToProps, { fetchSingleVehicle, updateVehicleRequest, deleteUpdateVehicleErrorMessages  })(EditvehicleForm );
