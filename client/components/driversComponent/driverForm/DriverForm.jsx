import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import validateInput from "../../../middleware/driverInputValidate";
import TextField from "../../commons/TextField.jsx";
import SubmitButton from "../../commons/SubmitButton.jsx";
import createDriver from "../../../actions/createDriverAction";

/**
 * @class DriverForm
 */
class DriverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      fullname: "",
      driversLicense: "",
      vehicleType: "",
      vehicleNumber: "",
      plateNumber: "",
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
      this.props.createDriver(this.state);
    }
  }

  render() {
    const {
      errors,
      phoneNumber,
      fullname,
      vehicleNumber,
      vehicleType,
      plateNumber,
      driversLicense
    } = this.state;

    const { status } = this.props;

    console.log("--->>", status);

    if (status) {
      return <Redirect to="/drivers" />;
    }

    const driverForm = (
      <div>
        <div className="col-md-9">
          <div className="panel panel-default">
            <div className="panel-heading main-color-bg">
              <h3 className="panel-title">Drivers</h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
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
                  <div className="form-group col-md-6">
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
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Driver's License</label>
                    <TextField
                      error={errors.driversLicense}
                      onChange={this.onChange}
                      value={driversLicense}
                      field="driversLicense"
                      type="text"
                      className="mydriverlicense"
                      placeholder="Driver's License"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Vehicle Type</label>
                    <TextField
                      error={errors.vehicleType}
                      onChange={this.onChange}
                      value={vehicleType}
                      field="vehicleType"
                      type="text"
                      className="myvehicletype"
                      placeholder="Vehicle Type"
                    />
                  </div>
                  <div className="form-group col-md-6">
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
                  <div className="form-group col-md-6">
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
                </div>
                <div className="form-group text-center col-md-12">
                  <SubmitButton
                    type="submit"
                    className="mybutton"
                    onClick={this.onSubmit}
                    label="Create Driver"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{driverForm}</div>;
  }
}

DriverForm.propTypes = {
  createDriver: PropTypes.func.isRequired
};

DriverForm.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  status: state.postDriverReducer.status
});

export default connect(
  mapStateToProps,
  { createDriver }
)(DriverForm);
