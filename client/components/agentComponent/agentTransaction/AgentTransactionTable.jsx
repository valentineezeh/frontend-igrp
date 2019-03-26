import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import Cookie from 'cookies-js';
import datetime from 'node-datetime';
import agentTransactions from '../../../actions/agentTransactionsAction';


class AgentTransactionTable extends React.Component {
    componentDidMount(){
        const phoneNumber = Cookie.get('phoneNumber');
        const { agentTransactions } = this.props;
        agentTransactions(phoneNumber)
    }
    render () {
        const { allAgentTransaction } = this.props;
        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'agentName',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Phone Number',
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
                    label: 'Date of Transaction',
                    field: 'date',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Time of Transaction',
                    field: 'time',
                    sort: 'asc',
                    width: 150
                },
            ],
            rows: allAgentTransaction.allAgentTransactions.map(transactions => {
                return {
                    agentName: transactions.agentName,
                    agentNumber: transactions.agentNumber,
                    vehicleNumber: transactions.vehicleNumber,
                    date: datetime.create(transactions.date).format('m/d/y'),
                    time: datetime.create(transactions.date).format('H:S:M'),
                }
            })
        }; 
        return (
<div class="col-md-9">
        <div class="panel panel-default" id="transaction">
          <div class="panel-heading main-color-bg">
            <h3 class="panel-title">All Agents</h3>
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
        )
    }
}

const mapStateToProps = state => {
    return {
        allAgentTransaction: state.singleAgentAllTransaction
    }
}

export default connect(mapStateToProps, { agentTransactions })(AgentTransactionTable);
