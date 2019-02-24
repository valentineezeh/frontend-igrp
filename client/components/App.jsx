import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header.jsx";
import FooterBar from "./FooterBar.jsx";
import LoginForm from "./login/LoginForm.jsx";
import Dashboard from "./dashboardComponents/Dashboard.jsx";
import AgentPage from "./agentComponent/agentPage/AgentPage.jsx";
import DriverPage from "./driversComponent/driverPage/DriverPage.jsx";
import Transactions from "./transactionsComponent/Transactions.jsx";
import privateRoute from "../utils/privateRoute";

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
          <Route exact path="/transactions" component={Transactions} />
        </div>
        <FooterBar />
      </div>
    );
  }
}

export default App;
