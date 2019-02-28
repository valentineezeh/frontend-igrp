import React from "react";
import moment from "../../middleware/moment";

const TransactionsRow = props => {
  return (
    <tr>
      <td>{props.transactions.agentName}</td>
      <td>{props.transactions.driverName}</td>
      <td>
        {0}
        {props.transactions.agentNumber}
      </td>
      <td>{props.transactions.vehicleNumber}</td>
      <td>{moment(props.transactions.date).format("MM-DD-YY")}</td>
    </tr>
  );
};

export default TransactionsRow;
