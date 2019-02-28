import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header.jsx";
import FooterBar from "./FooterBar.jsx";
import LoginForm from "./login/LoginForm.jsx";
import Dashboard from "./dashboardComponents/Dashboard.jsx";
import AgentPage from "./agentComponent/agentPage/AgentPage.jsx";
import Agents from "./agentComponent/agentForm/Agents.jsx";
import DriverPage from "./driversComponent/driverPage/DriverPage.jsx";
import Drivers from "./driversComponent/driverForm/Drivers.jsx";
import Transactions from "./transactionsComponent/Transactions.jsx";
import privateRoute from "../utils/privateRoute";
import SingleAgentPage from "./agentComponent/singleAgentPage/SingleAgentPage.jsx";
import AgentTransactionPage from "./agentComponent/agentTransaction/AgentTransactionPage.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/dashboard" component={privateRoute(Dashboard)} />
          <Route exact path="/drivers" component={privateRoute(DriverPage)} />
          <Route exact path="/agents" component={privateRoute(AgentPage)} />
          <Route exact path="/create-agent" component={privateRoute(Agents)} />
          <Route
            exact
            path="/create-driver"
            component={privateRoute(Drivers)}
          />
          <Route
            exact
            path="/transactions"
            component={privateRoute(Transactions)}
          />
          <Route
            exact
            path="/single-agent"
            component={privateRoute(SingleAgentPage)}
          />
          <Route
            exact
            path="/agent-transactions"
            component={privateRoute(AgentTransactionPage)}
          />
        </div>
        <FooterBar />
      </div>
    );
  }
}

export default App;
