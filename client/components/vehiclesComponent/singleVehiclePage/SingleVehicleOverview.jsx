import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Cookie from 'cookies-js';
import datetime from 'node-datetime';
import fetchSingleVehicle from '../../../actions/getSingleVehicleAction';
import deleteVehicleRequest from '../../../actions/deleteVehicleAction';

class SingleVehicleOverview extends React.Component {
  constructor(props) {
    super(props);
    this.onEditVehicle = this.onEditVehicle.bind(this);
    this.onDeleteVehicle = this.onDeleteVehicle.bind(this);
  }

  componentDidMount(){
    const vrtID = Cookie.get('vrtID');
    const { FetchSingleVehicle } = this.props;
    FetchSingleVehicle(vrtID);
  }

  onEditVehicle() {
    window.location.href = "/edit-vehicle"
  }

  onDeleteVehicle() {
    const { singleVehicle, DeleteVehicleRequest  } = this.props;
    console.log('>>>: ', singleVehicle._id)
    const vehicleId = singleVehicle._id
    DeleteVehicleRequest(vehicleId);
  }

  render() {
    const { singleVehicle, status } = this.props;
    const converted = '' + singleVehicle.deactivate

    if(status){
      window.location.href = "/vehicles"
    }

    return (
      <div className="col-md-9" id="singleagentoverview">
        <div className="panel-heading" />
        <div className="panel panel-default">
          <div className="panel-heading main-color-bg">
          <div className="row">
            <div className="col-md-4">
            <a
            id="anchor"
            className="btn btn-white"
            href="#"
            role="button"
            >
            <i className="fas fa-shuttle-van" />{'  '}
            Single Vehicle
            </a>
            </div>
            <div className="col-md-4">
            <Link
            id="anchor"
            className="btn btn-white"
            to="/vehicle-trips"
            role="button"
            >
            <i className="fas fa-bus" />{'  '}
            View Trips
            </Link>
            </div>
            <div className="col-md-4">
            <Link
            id="anchor"
            className="btn btn-white"
            to="#"
            role="button"
            onClick={this.onDeleteVehicle}
            >
            <i className="fas fa-trash" />{'  '}
            Delete Vehicle
            </Link>
            </div>
          </div>
          </div>
          <div className="panel-body">

            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Vehicle Owner Name</label>
                <br />
                <p>{singleVehicle.vehicleOwnerName}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputEmail4">Phone Number</label>
                <p>{singleVehicle.phoneNumber}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Vehicle Owner Address</label>
                <p>{singleVehicle.vehicleOwnerAdress}</p>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Vehicle Registration Year</label>
                <br />
                <p>{singleVehicle.RegistrationYear}</p>
              </div>

              <div className="form-group col-md-4">
                <label for="inputEmail4">Vehicle Chasis Number</label>
                <p>{singleVehicle.chasisNo}</p>
              </div>

              <div className="form-group col-md-4">
                <label for="inputPassword4">Vehicle Engine Number</label>
                <p>{singleVehicle.engineNumber}</p>
              </div>

            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputEmail4">Vehicle Make</label>
                <p>{singleVehicle.vehicleMake}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">VRT ID</label>
                <p>{singleVehicle.vrtID}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Road Worthiness Exp Date</label>
                <p>{singleVehicle.RoadWorthinessExpDate}</p>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="">Insurance Exp Date</label>
                <p>{singleVehicle.InsuranceExpDate}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Location of Transaction</label>
                <p>{singleVehicle.locationOfTransaction}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Role</label>
                <p>{singleVehicle.role}</p>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="">Deactivation Status</label>
                <p>{converted}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Time of Transaction</label>
                <p>{
                  datetime.create(singleVehicle.timeOfTransaction).format('H/M/S')}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Date</label>
                <p>{
                  datetime.create(singleVehicle.date).format('m/d/y')}</p>
              </div>
            </div>
            
            <div className="text-center">
            <hr />
            <Link
                    to="/edit-vehicle"
                    className="btn btn-danger"
                    role="button"
                    id="anchor"
                  >
                      {' '}
                      Edit Vehicle
                  </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleVehicleOverview.propTypes = {
  singleVehicle: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => {
  return {
    singleVehicle: state.singleVehicleRequest.singleVehicle,
    status: state.deleteVehicle.deleteSuccess
  };
};

const mapDispatchToProps = dispatch => ({
  FetchSingleVehicle: vrtID => dispatch(fetchSingleVehicle(vrtID)),
  DeleteVehicleRequest: vehicleId => dispatch(deleteVehicleRequest(vehicleId))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleVehicleOverview);
