import React from "react";
import moment from "../../middleware/moment";

const AgentsRow = props => {
  return (
    <tr>
      <td>{props.agents.fullname}</td>
      <td>{props.agents.email}</td>
      <td>{moment(props.agents.date).format("MMMM-DD-YY")}</td>
    </tr>
  );
};

export default AgentsRow;
