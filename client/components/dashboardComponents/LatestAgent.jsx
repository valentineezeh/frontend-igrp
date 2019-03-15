import React from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import moment from '../../middleware/moment';

class LatestAgent extends React.Component {
    render() {
        const { agents } = this.props.allAgents;
        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'fullname',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Date Joined',
                    field: 'date',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Deactivation',
                    field: 'status',
                    sort: 'asc',
                    width: 150
                }
            ],
            rows: agents.map(agent => {
              return {
                name: agent.fullname,
                email: agent.email,
                date: moment(agent.date).format("MM-DD-YY"),
                status: agent.deactivate.toString(),
              }
            })
        };
    return (
      <MDBDataTable
        striped
        bordered
        small
        data={data}
        />
    );
    }
}

export default LatestAgent;
