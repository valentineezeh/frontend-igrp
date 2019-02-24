import React from "react";
import AgentsRow from "./AgentsRow.jsx";

class LatestAgent extends React.Component {
  render() {
    const { agents } = this.props.allAgents;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Latest Agents</h3>
        </div>
        <div className="panel-body">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Joined</th>
              </tr>
            </thead>
            <tbody>
              {agents.map(agents => (
                <AgentsRow key={agents.id} agents={agents} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LatestAgent;
