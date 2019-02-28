import React from "react";
import TransactionsRow from "./TransactionsRow.jsx";

class TransactionList extends React.Component {
  render() {
    const transactions = this.props.allTransactions;

    return (
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-heading main-color-bg">
            <h3 class="panel-title">All Transactions</h3>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table id="example" className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Agent Name</th>
                    <th scope="col">Driver Name</th>
                    <th scope="col">Agent Phone Number</th>
                    <th scope="col">Vehicle Number</th>
                    <th scope="col">Date of Transaction</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(transactions => (
                    <TransactionsRow
                      key={transactions.id}
                      transactions={transactions}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionList;
