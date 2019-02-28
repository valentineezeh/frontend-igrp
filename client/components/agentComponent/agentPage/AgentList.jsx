import React from "react";
import AgentsRow from "./AgentRows.jsx";

class AgentList extends React.Component {
  render() {
    const { agents } = this.props.allAgents;
    return (
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-heading main-color-bg">
            <h3 class="panel-title">All Agents</h3>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Deactivate</th>
                    <th scope="col">Joined</th>
                    <th scope="col">View</th>
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
        </div>
      </div>
    );
  }
}

export default AgentList;
