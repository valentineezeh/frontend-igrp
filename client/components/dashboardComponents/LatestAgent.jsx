import React from 'react';
import { MDBDataTable } from 'mdbreact';
import datetime from 'node-datetime';

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
                },
            ],
            rows: agents.map(agent => {
                const convertToString = '' + agent.deactivate
              return {
                name: agent.fullname,
                email: agent.email,
                date: datetime.create(agent.date).format('m/d/y'),
                status: convertToString,
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
