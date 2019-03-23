import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cookie from 'cookies-js';
import moment from "../../../middleware/moment";
import fetchSingleVehicle from '../../../actions/getSingleVehicleAction';

class SingleVehicleOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const vrtID = Cookie.get('vrtID');
    const { fetchSingleVehicle } = this.props;
    fetchSingleVehicle(vrtID);

  }
  render() {
    // const convertedStatus = "" + agentStatus;
    const { singleVehicle } = this.props;
    const converted = '' + singleVehicle.deactivate

    return (
      <div className="col-md-9" id="singleagentoverview">
        <div className="panel-heading" />
        <div className="panel panel-default">
          <div className="panel-heading main-color-bg">
            <div className="row">
              <div className="col-md-4">
                <Link 
                  id="anchor" 
                  className="btn btn-white" 
                  to="#" 
                  role="button"
                  >
                </Link>
              </div>

              <div className="col-md-4">
                <a
                  id="anchor"
                  className="btn btn-white"
                  href="#"
                  role="button"
                >
                </a>
              </div>

              <div className="col-md-4">
                <Link
                  id="anchor"
                  className="btn  btn-white"
                  href="editAgent.html"
                  role="button" 
                  to="#" 
                >
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
                <p>{singleVehicle.timeOfTransaction}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Date</label>
                <p>{singleVehicle.date}</p>
              </div>
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
    singleVehicle: state.singleVehicleRequest.singleVehicle
  };
};


export default connect(
  mapStateToProps,
  { fetchSingleVehicle }
)(SingleVehicleOverview);
