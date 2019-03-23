import React from "react";
import { MDBDataTable } from 'mdbreact';
import moment from '../../middleware/moment';

class TransactionList extends React.Component {
  render() {
    const transactions = this.props.allTransactions;
    const data = {
      colums: [
        {
          label: 'Agent Name',
          field: 'agentName',
          sort: 'dsc',
          width: 150
        },
        {
          label: 'Driver Name',
          field: 'driverName',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Agent Phone Number',
          field: 'agentNumber',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Vehicle Number',
          field: 'vehicleNumber',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
          width: 150
        },
      ],
      rows: transactions.map(transaction => {
        return {
          agentName: transaction.agentName,
          driverName: transaction.driverName,
          agentNumber: transaction.agentNumber,
          vehicleNumber: transaction.vehicleNumber,
          date: moment(transaction.date).format("MM-DD-YY")
        }
      })
    }

    return (
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-heading main-color-bg">
            <h3 class="panel-title">All Transactions</h3>
          </div>
          <div className="panel-body">
      <MDBDataTable
        striped
        bordered
        small
        data={data}
        /> 
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionList;
