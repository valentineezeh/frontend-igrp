const routes = {
    SIGN_IN: '/superLogin',
    AGENTS: '/agents',
    CREATEAGENTS: '/createAgent',
    CREATEVEHICLES: '/createVehicle',
    VEHICLES: '/vehicles',
    TRANSACTIONS: '/transactions',
    SINGLEAGENT: '/singleAgent',
    ACTIVATEAGENT: '/activate',
    DEACTIVATEAGENT: '/deactivate',
    AGENTTRANSACTIONS: '/agentTransaction',
    DELETEAGENT: '/deleteAgent',
    SINGLEVEHICLE: '/singleVehicle',
    UPDATEAGENT: '/updateAgent',
    UPDATEVEHICLE: '/updateVehicle',
    GETVEHICLETRIPS: '/vehicleTransaction',
    CONFIRMBVN: '/validateBvn',
    CONFIRMNIN: '/validateNin',
    ACTIVATEWALLET: '/wallet/activatewallet',
    RESETPASSCODE: '/wallet/walletcodereset',
    GETWALLETBALANCE: '/wallet/checkbalance',
    WALLETRECOVERYCODE: '/wallet/walletcoderecovery',
    SENDMONEYTOWALLET: '/wallet/sendmoney',
    TRANSACTIONHISTORY: '/wallet/transactionHistory',
    GETALLBANKS: '/wallet/banklist',
    BANKTRANSFER: '/wallet/debitwallet',
    CREDITWALLET: '/wallet/fundwallet',
    DELETEVEHICLE: '/deleteVehicle'

};

export default routes;