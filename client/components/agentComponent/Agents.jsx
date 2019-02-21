import React from "react";
import AgentSideMenu from "./AgentSideMenu.jsx";
import AgentForm from "./AgentForm.jsx";

class Agents extends React.Component {
  render() {
    const agent = (
      <div>
        <header id="header">
          <div class="container">
            <div class="row">
              <div class="col-md-10">
                <h1>
                  <span class="glyphicon glyphicon-cog" aria-hidden="true" />
                  <small>Agent</small>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <a href="index.html">Dashboard</a>
              </li>
              <li class="active">Agent</li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <AgentSideMenu />
              <AgentForm />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{agent}</div>;
  }
}

export default Agents;
