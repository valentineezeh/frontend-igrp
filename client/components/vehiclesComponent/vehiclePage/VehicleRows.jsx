import React from "react";
import { connect } from 'react-redux';
import datetime from 'node-datetime';
import fetchSingleVehicle from '../../../actions/getSingleVehicleAction';

class VehicleRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
    this.onGetSingleVehicle = this.onGetSingleVehicle .bind(this);
  }
  onGetSingleVehicle(event) {
    event.preventDefault();
    const { FetchSingleVehicle } = this.props;
    this.setState({ isLoading: true });
    FetchSingleVehicle(this.props.vehicles.vrtID)
  }

  render(){
    const { vehicles, status } = this.props;
    const convertedStatus = '' + vehicles.deactivate;
    const { isLoading } = this.state;
    
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
        <td>{vehicles.vrtID}</td>
        <td>{vehicles.role}</td>
        <td>{convertedStatus}</td>
        <td>{
          datetime.create(vehicles.date).format('m/d/y')}</td>
        <td>
        {
            isLoading ? (
            <button
            type="button"
            class="btn btn-danger"
          >
            <i className="fa fa-spinner fa-spin" />
          </button>
            ): (
              <button
              type="button"
              class="btn btn-danger"
              onClick={this.onGetSingleVehicle}
            >
              <i className="fa fa-eye" />
            </button>
            )
          }
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
