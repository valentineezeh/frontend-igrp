import React from "react";
import { MDBDataTable } from 'mdbreact';
import datetime from 'node-datetime';

class TransactionList extends React.Component {
  render() {
    const transactions = this.props.allTransactions;
    const data = {
      columns: [
        {
          label: 'Agent Name',
          field: 'agentName',
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
        {
          label: 'Time',
          field: 'time',
          sort: 'asc',
          width: 150
        },
      ],
      rows: transactions.map(transaction => {
        return {
          agentName: transaction.agentName,
          agentNumber: `${0}${transaction.agentNumber}`,
          vehicleNumber: transaction.vehicleNumber,
          date: datetime.create(transaction.date).format('m/d/y'),
          time: datetime.create(transaction.date).format('H:M:S')
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
        data={data}
        /> 
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionList;
