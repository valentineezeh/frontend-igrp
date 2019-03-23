import React from "react";
import { connect } from 'react-redux';
import moment from "../../../middleware/moment";
import fetchSingleVehicle from '../../../actions/getSingleVehicleAction';

class VehicleRow extends React.Component {
  constructor(props) {
    super(props);
    this.onGetSingleVehicle = this.onGetSingleVehicle .bind(this);
  }
  onGetSingleVehicle(event) {
    event.preventDefault();
    const { FetchSingleVehicle } = this.props;
    FetchSingleVehicle(this.props.vehicles.vrtID)
  }

  render(){
    const { vehicles, status } = this.props;
    const convertedStatus = '' + vehicles.deactivate
    
    if(status) {
      window.location.href = "/single-vehicle"
    }
    
    return (
      <tr>
        <td>
          {0}
          {vehicles.phoneNumber}
        </td>
        <td>{vehicles.vehicleType}</td>
        <td>{vehicles.vehicleNumber}</td>
        <td>{vehicles.role}</td>
        <td>{convertedStatus}</td>
        <td>{moment(vehicles.date).format("MMM-DD-YY")}</td>
        <td>
            <button
              type="button"
              class="btn btn-danger"
              onClick={this.onGetSingleVehicle}
            >
              <i className="fa fa-eye" />
            </button>
          </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.singleVehicleRequest.status
  }
}

const mapDispatchToProps = dispatch => ({
  FetchSingleVehicle: vrtID => {
    dispatch(fetchSingleVehicle(vrtID))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleRow);
