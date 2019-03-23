import React from "react";
import { MDBDataTable } from 'mdbreact';
import moment from '../../middleware/moment';

class TransactionList extends React.Component {
  render() {
    const transactions = this.props.allTransactions;
    const data = {
      columns: [
        {
          label: 'Agent Name',
          field: 'agentName',
          sort: 'desc',
          width: 150
        },
        {
          label: 'Driver Name',
          field: 'driverName',
          sort: 'desc',
          width: 150
        },
        {
          label: 'Agent Phone Number',
          field: 'agentNumber',
          sort: 'desc',
          width: 150
        },
        {
          label: 'Vehicle Number',
          field: 'vehicleNumber',
          sort: 'desc',
          width: 150
        },
        {
          label: 'Date',
          field: 'date',
          sort: 'desc',
          width: 150
        },
        {
          label: 'Time',
          field: 'time',
          sort: 'desc',
          width: 150
        },
      ],
      rows: transactions.map(transaction => {
        return {
          agentName: transaction.agentName,
          driverName: transaction.driverName,
          agentNumber: `${0}${transaction.agentNumber}`,
          vehicleNumber: transaction.vehicleNumber,
          date: moment(transaction.date).format("MM-DD-YY"),
          time: moment(transaction.date).format("HH-mm-ss")
        }
      })
    }

    return (
      <div class="col-md-9">
        <div class="panel panel-default my-auto" id="transaction">
          <div class="panel-heading main-color-bg">
            <h3 class="panel-title">All Transactions</h3>
          </div>
          <div className="panel-body">
      <MDBDataTable
        striped
        bordered
        small
        order={['agentName', 'desc' ]}
        data={data}
        /> 
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionList;
