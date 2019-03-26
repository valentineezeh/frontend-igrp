import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header.jsx";
import FooterBar from "./FooterBar.jsx";
import LoginForm from "./login/LoginForm.jsx";
import Dashboard from "./dashboardComponents/Dashboard.jsx";
import AgentPage from "./agentComponent/agentPage/AgentPage.jsx";
import Agents from "./agentComponent/agentForm/Agents.jsx";
import VehiclePage from "./vehiclesComponent/vehiclePage/VehiclePage.jsx";
import Vehicles from "./vehiclesComponent/vehicleForm/Vehicles.jsx";
import Transactions from "./transactionsComponent/Transactions.jsx";
import privateRoute from "../utils/privateRoute";
import SingleAgentPage from "./agentComponent/singleAgentPage/SingleAgentPage.jsx";
import AgentTransactionPage from "./agentComponent/agentTransaction/AgentTransactionPage.jsx";
import EditAgentPage from './agentComponent/editAgentComponent/EditAgentPage.jsx';
import SingleVehiclePage from './vehiclesComponent/singleVehiclePage/SingleVehiclePage.jsx';
import EditVehiclePage from './vehiclesComponent/updateVehicleComponents/EditVehiclePage.jsx';
import VehicleTripsPage from './vehiclesComponent/vehicleTrips/VehicleTripsPage.jsx'
import ConfirmIDPage from './confirmBvnNimc/ConfirmIDPage.jsx';
import ActivateWalletPage from './walletComponents/activateWalletComponents/ActivateWalletPage.jsx';
import WalletCodeResetPage from './walletComponents/walletCodeResetComponents/WalletCodeResetPage.jsx';
import WalletCodeRecoveryPage from './walletComponents/walletCodeRecoveryComponents/WalletCodeRecoveryPage.jsx';
import SendMoneyPage from './transactionsComponent/sendMoneyComponent/SendMoneyPage.jsx';
import TransactionHistoryPage from './transactionsComponent/transactionHistoryComponents/TransactionHistoryPage.jsx';
import VerifyBankAccountPage from './instaPayComponent/verifyAccountComponent/VerifyBankAccountPage.jsx';
import InstaPayBankTransferPage from './instaPayComponent/instaPayBankTransferComponents/InstaPayBankTransferPage.jsx';
import InstaPayCreditWalletPage from './instaPayComponent/instaPayCreditWalletComponents/InstaPayCreditWalletPage.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/dashboard" component={privateRoute(Dashboard)} />
          <Route exact path="/vehicles" component={privateRoute(VehiclePage)} />
          <Route exact path="/agents" component={privateRoute(AgentPage)} />
          <Route exact path="/create-agent" component={privateRoute(Agents)} />
          <Route
            exact
            path="/create-vehicle"
            component={privateRoute(Vehicles)}
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
          <Route
            exact
            path="/edit-agent"
            component={privateRoute(EditAgentPage)}
          />
          <Route
            exact
            path="/single-vehicle"
            component={privateRoute(SingleVehiclePage)}
          />
          <Route
            exact
            path="/edit-vehicle"
            component={privateRoute(EditVehiclePage)}
          />
          <Route
            exact
            path="/vehicle-trips"
            component={privateRoute(VehicleTripsPage)}
          />
          <Route
            exact
            path="/confirm-user"
            component={privateRoute(ConfirmIDPage)}
          />
          <Route
            exact
            path="/activate-wallet"
            component={privateRoute(ActivateWalletPage)}
          />
          <Route
            exact
            path="/reset-wallet-code"
            component={privateRoute(WalletCodeResetPage)}
          />
          <Route
            exact
            path="/recover-wallet-code"
            component={privateRoute(WalletCodeRecoveryPage)}
          />
          <Route
            exact
            path="/send-money-wallet"
            component={privateRoute(SendMoneyPage)}
          />
          <Route
            exact
            path="/transactions-history"
            component={privateRoute(TransactionHistoryPage)}
          />
          <Route
            exact
            path="/verify-bank-details"
            component={privateRoute(VerifyBankAccountPage)}
          />
          <Route
            exact
            path="/bank-fund-transfer"
            component={privateRoute(InstaPayBankTransferPage)}
          />
          <Route
            exact
            path="/credit-wallet"
            component={privateRoute(InstaPayCreditWalletPage)}
          />
        </div>
        <FooterBar />
      </div>
    );
  }
}

export default App;
