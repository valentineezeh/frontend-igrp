import React from 'react';
import { MDBDataTable } from 'mdbreact';
import datetime from 'node-datetime';

class TransactionHistoryTable extends React.Component {
    render() {
        const transactionHistory = this.props.transactionHistory;
        const data = {
            columns: [
                {
                    label: 'Agent Phone Number',
                    field: 'recipientNumber',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Amount Recieved',
                    field: 'amount',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Transaction Type',
                    field: 'transactionType',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Transaction Status',
                    field: 'status',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Transaction Date',
                    field: 'date',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Transaction Time',
                    field: 'time',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: transactionHistory.map(history => {
                return {
                    recipientNumber: history.recipientNumber,
                    amount: history.amount,
                    transactionType: history.transactionType,
                    status: history.status,
                    date: datetime.create(history.date).format('m/d/y'),
                    time: datetime.create(history.date).format('H:M:S')
                }
            })
        }
        return (
            <div class="col-md-9">
              <div class="panel panel-default my-auto" id="transaction">
                <div class="panel-heading main-color-bg">
                  <h3 class="panel-title">All Transactions History</h3>
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

export default TransactionHistoryTable;