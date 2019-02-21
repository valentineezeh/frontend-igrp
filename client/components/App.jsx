import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header.jsx";
import FooterBar from "./FooterBar.jsx";
import LoginForm from "./login/LoginForm.jsx";
import Dashboard from "./dashboardComponents/Dashboard.jsx";
import Drivers from "./driversComponent/Drivers.jsx";
import Agents from "./agentComponent/Agents.jsx";
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
          <Route exact path="/drivers" component={Drivers} />
          <Route exact path="/agents" component={Agents} />
          <Route exact path="/transactions" component={Transactions} />
        </div>
        <FooterBar />
      </div>
    );
  }
}

export default App;
