import React from "react";
import moment from "../../../middleware/moment";

const AgentsRow = props => {
  return (
    <tr>
      <td>{props.agents.fullname}</td>
      <td>
        {0}
        {props.agents.phoneNumber}
      </td>
      <td>{props.agents.address}</td>
      <td>{props.agents.bvn}</td>
      <td>{props.agents.nimc}</td>
      <td>{props.agents.email}</td>
      <td>{props.agents.age}</td>
      <td>{props.agents.role}</td>
      <td>{props.agents.deactivate}</td>
      <td>{moment(props.agents.date).format("MMM-DD-YY")}</td>
    </tr>
  );
};

export default AgentsRow;
