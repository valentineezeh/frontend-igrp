import React from "react";
import moment from "../../../middleware/moment";

const DriverRow = props => {
  return (
    <tr>
      <td>{props.drivers.fullname}</td>
      <td>
        {0}
        {props.drivers.phoneNumber}
      </td>
      <td>{props.drivers.vehicleType}</td>
      <td>{props.drivers.vehicleNumber}</td>
      <td>{props.drivers.role}</td>
      <td>{props.drivers.deactivate}</td>
      <td>{moment(props.drivers.date).format("MMM-DD-YY")}</td>
    </tr>
  );
};

export default DriverRow;
